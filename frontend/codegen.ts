import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://backend:3000/graphql",
  documents: ["app/**/*.tsx", "app/**/*.ts"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./graphql/documents/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
