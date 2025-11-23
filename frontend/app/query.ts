import { graphql } from "@/graphql/documents";
import {
  GetTodosQuery,
  GetTodosQueryVariables,
} from "@/graphql/documents/graphql";
import { TypedDocumentNode } from "urql";

export const GET_TODOS_QUERY = graphql(`
  query GetTodos {
    todos {
      id
      title
      description
      completed
      createdAt
      updatedAt
    }
  }
`) as TypedDocumentNode<GetTodosQuery, GetTodosQueryVariables>;
