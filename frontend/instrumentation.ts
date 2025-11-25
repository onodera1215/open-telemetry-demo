import { NodeSDK } from "@opentelemetry/sdk-node";
import { PeriodicExportingMetricReader } from "@opentelemetry/sdk-metrics";
import { resourceFromAttributes } from "@opentelemetry/resources";
import {
  ATTR_SERVICE_NAME,
  ATTR_SERVICE_VERSION,
} from "@opentelemetry/semantic-conventions";
import { SpanStatusCode, Tracer } from "@opentelemetry/api";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-proto";
import { OTLPMetricExporter } from "@opentelemetry/exporter-metrics-otlp-proto";
import { UndiciInstrumentation } from "@opentelemetry/instrumentation-undici";

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

export const OTLP_SERVICE_NAME = process.env.NEXT_PUBLIC_OTLP_SERVICE_NAME!;
export const OTLP_SERVICE_VERSION =
  process.env.NEXT_PUBLIC_OTLP_SERVICE_VERSION!;
const OTLP_SERVICE_TRACES_ENDPOINT =
  process.env.NEXT_PUBLIC_OTLP_SERVICE_TRACES_ENDPOINT!;
const OTLP_SERVICE_METRICS_ENDPOINT =
  process.env.NEXT_PUBLIC_OTLP_SERVICE_METRICS_ENDPOINT!;

let sdk: NodeSDK | null = null;
export async function register() {
  console.info("Registering OpenTelemetry SDK...");
  if (sdk) {
    return;
  }
  sdk = new NodeSDK({
    resource: resourceFromAttributes({
      [ATTR_SERVICE_NAME]: OTLP_SERVICE_NAME,
      [ATTR_SERVICE_VERSION]: OTLP_SERVICE_VERSION,
    }),
    traceExporter: new OTLPTraceExporter({
      url: OTLP_SERVICE_TRACES_ENDPOINT,
    }),
    metricReader: new PeriodicExportingMetricReader({
      exporter: new OTLPMetricExporter({
        url: OTLP_SERVICE_METRICS_ENDPOINT,
      }),
    }),
    instrumentations: [new UndiciInstrumentation()],
  });
  sdk.start();
}
