import { buildSchema } from "type-graphql";

export const createSchema = () =>
  buildSchema({
    resolvers: [__dirname + "/../modules/*/*.ts"],
    authChecker: ({ context: { req } }) => {
      // I can read context here
      // cehck permission vs what's in the db "roles" argument
      // that comes from `@Authorized`, eg,. ["ADMIN", "MODERATOR"]
      return !!req.session.userId;
    }
  });
