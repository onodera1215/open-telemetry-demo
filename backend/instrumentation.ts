/*instrumentation.ts*/
import { NodeSDK } from '@opentelemetry/sdk-node';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-proto';
import { OTLPMetricExporter } from '@opentelemetry/exporter-metrics-otlp-proto';
import { PeriodicExportingMetricReader } from '@opentelemetry/sdk-metrics';
import { resourceFromAttributes } from '@opentelemetry/resources';
import {
  ATTR_SERVICE_NAME,
  ATTR_SERVICE_VERSION,
} from '@opentelemetry/semantic-conventions';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';

export const OTLP_SERVICE_NAME = process.env.OTLP_SERVICE_NAME!;
export const OTLP_SERVICE_VERSION = process.env.OTLP_SERVICE_VERSION!;
const JEAGER_TRACES_ENDPOINT = process.env.OTLP_JAEGER_TRACES_ENDPOINT!;
const JEAGER_METRICS_ENDPOINT = process.env.OTLP_JAEGER_METRICS_ENDPOINT!;

export const openTelemetrySdk = new NodeSDK({
  resource: resourceFromAttributes({
    [ATTR_SERVICE_NAME]: OTLP_SERVICE_NAME,
    [ATTR_SERVICE_VERSION]: OTLP_SERVICE_VERSION,
  }),
  traceExporter: new OTLPTraceExporter({
    url: JEAGER_TRACES_ENDPOINT,
  }),
  metricReader: new PeriodicExportingMetricReader({
    exporter: new OTLPMetricExporter({
      url: JEAGER_METRICS_ENDPOINT,
    }),
  }),
  instrumentations: [getNodeAutoInstrumentations()],
});
