import { NodeSDK } from "@opentelemetry/sdk-node";
import {
  PeriodicExportingMetricReader,
  ConsoleMetricExporter,
} from "@opentelemetry/sdk-metrics";
import { resourceFromAttributes } from "@opentelemetry/resources";
import {
  ATTR_SERVICE_NAME,
  ATTR_SERVICE_VERSION,
} from "@opentelemetry/semantic-conventions";
import { SpanStatusCode, Tracer } from "@opentelemetry/api";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-proto";

export function withSpan<T extends (...args: any[]) => any>(
  tracer: Tracer,
  name: string,
  fn: T
) {
  return (async (...args: Parameters<T>): Promise<ReturnType<T>> => {
    return tracer.startActiveSpan(name, async (span) => {
      try {
        const result = await fn(...args);
        return result as ReturnType<T>;
      } catch (err) {
        span.recordException(err as Error);
        span.setStatus({ code: SpanStatusCode.ERROR });
        throw err;
      } finally {
        span.end();
      }
    });
  }) as T;
}

export const OTEL_SERVICE_NAME = process.env.NEXT_PUBLIC_OTEL_SERVICE_NAME!;
export const OTEL_SERVICE_VERSION =
  process.env.NEXT_PUBLIC_OTEL_SERVICE_VERSION!;
const OTEL_SERVICE_ENDPOINT = process.env.NEXT_PUBLIC_OTEL_SERVICE_ENDPOINT!;

const sdk = new NodeSDK({
  resource: resourceFromAttributes({
    [ATTR_SERVICE_NAME]: OTEL_SERVICE_NAME,
    [ATTR_SERVICE_VERSION]: OTEL_SERVICE_VERSION,
  }),
  traceExporter: new OTLPTraceExporter({
    url: OTEL_SERVICE_ENDPOINT,
    headers: {},
  }),
  metricReader: new PeriodicExportingMetricReader({
    exporter: new ConsoleMetricExporter(),
  }),
});
sdk.start();
