'use client';

import { urqlClient } from "@/graphql/client";
import { Provider } from "urql";

export default function UrqlProvider({ children, client }: { children: React.ReactNode, client: typeof urqlClient }) {
  return <Provider value={client}>{children}</Provider>;
}