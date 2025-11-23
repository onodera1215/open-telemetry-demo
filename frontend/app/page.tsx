import HomeLayout from "@/components/templates/HomeLayout";
import { GET_TODOS_QUERY } from "./query";
import { Todo } from "@/graphql/documents/graphql";
import urqlServerClient from "@/graphql/server-client";

export default async function Home() {
  const client = await urqlServerClient();
  const result = await client.query<Todo[]>(GET_TODOS_QUERY, {}).toPromise();
  const { data } = result;
  return <HomeLayout todos={data || []} />;
}
