"use server";
import { Client, cacheExchange, fetchExchange } from "urql";

export default async function urqlServerClient() {
  return new Client({
    url: "backend:3000/graphql",
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: () => ({
      cache: "no-store",
    }),
  });
}
