import { NextRequest } from "next/server";

const GRAPHQL_ENDPOINT = "http://backend:3000/graphql";

export async function POST(req: NextRequest) {
  // クライアントから来た GraphQL リクエスト本体をそのまま取得
  const body = await req.json();

  // GraphQL サーバーにプロキシ
  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    cache: "no-store", // SSRでキャッシュしない
  });

  const data = await response.text();

  return new Response(data, {
    status: response.status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
