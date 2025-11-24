import HomeLayout from "@/components/templates/HomeLayout";
import getTodosFeature from "./features/get-todos.feature";
import { trace } from "@opentelemetry/api";
import { OTEL_SERVICE_NAME, OTEL_SERVICE_VERSION, withSpan } from "@/instrumentation";

const tracer = trace.getTracer(OTEL_SERVICE_NAME, OTEL_SERVICE_VERSION);

async function Home() {
  const { todos } = await getTodosFeature();
  return <HomeLayout todos={todos} />;
}

export default withSpan(tracer, "Home Page Load", Home);
