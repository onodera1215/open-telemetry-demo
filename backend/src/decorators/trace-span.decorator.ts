import { SpanStatusCode, trace } from '@opentelemetry/api';
import { OTLP_SERVICE_NAME, OTLP_SERVICE_VERSION } from 'instrumentation';
export function TraceSpan(name?: string): MethodDecorator {
  const tracer = trace.getTracer(OTLP_SERVICE_NAME, OTLP_SERVICE_VERSION);
  return (target, propertyKey, descriptor: PropertyDescriptor) => {
    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
      // メソッド名をデフォルトの span 名に使う
      const spanName =
        name || `${target.constructor.name}.${String(propertyKey)}`;

      return tracer.startActiveSpan(spanName, async (span) => {
        try {
          const result = await original.apply(this, args);

          // async 対応
          if (result && typeof result.then === 'function') {
            return result
              .then((value: any) => {
                span.end();
                return value;
              })
              .catch((err) => {
                span.recordException(err);
                span.setStatus({ code: SpanStatusCode.ERROR });
                span.end();
                throw err;
              });
          }
          // 同期のとき
          span.end();
          return result;
        } catch (err) {
          span.recordException(err);
          span.setStatus({ code: SpanStatusCode.ERROR });
          span.end();
          throw err;
        }
      });
    };

    return descriptor;
  };
}
