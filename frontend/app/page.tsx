import HomeLayout from "@/components/templates/HomeLayout";
import getTodosFeature from "./features/get-todos.feature";

export default async function Home() {
  const { todos } = await getTodosFeature();
  return <HomeLayout todos={todos} />;
}
