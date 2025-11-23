"use server";

import { Client, cacheExchange, fetchExchange } from "urql";

export async function getServerClient() {
  return new Client({
    url: "http://backend:3000/graphql",
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: () => ({
      cache: "no-store",
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    }),
  });
}
