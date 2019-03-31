import "reflect-metadata";
import { ApolloServer, ApolloError } from "apollo-server-express";
import * as Express from "express";
import { buildSchema, ArgumentValidationError } from "type-graphql";
import { createConnection } from "typeorm";
import { RegisterResolver } from "./modules/user/Register";
import { GraphQLFormattedError, GraphQLError } from "graphql";

const main = async () => {
  await createConnection();
  const schema = await buildSchema({
    resolvers: [RegisterResolver]
  });
  const apolloServer = new ApolloServer({
    schema,
    // custom error handling from: https://github.com/19majkel94/type-graphql/issues/258
    formatError: (error: GraphQLError): GraphQLFormattedError => {
      if (error.originalError instanceof ApolloError) {
        return error;
      }

      if (error.originalError instanceof ArgumentValidationError) {
        const { extensions = {}, locations, message, path } = error;

        extensions.code = "GRAPHQL_VALIDATION_FAILED";

        return {
          extensions,
          locations,
          message,
          path
        };
      }

      error.message = "Internal Server Error";

      return error;
    }
  });
  const app = Express.default();
  apolloServer.applyMiddleware({ app });
  app.listen(4000, () => {
    console.log(
      "server started! GraphQL Playground available at:\nhttp://localhost:4000/graphql"
    );
  });
};

main();
