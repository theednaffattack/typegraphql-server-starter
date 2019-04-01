import { graphql } from "graphql";
import { createSchema } from "../global-utils/createSchema";
import Maybe from "graphql/tsutils/Maybe";

interface Options {
  source: string;
  variableValues?: Maybe<{
    [key: string]: any;
  }>;
}

export const gCall = async ({ source, variableValues }: Options) => {
  return graphql({
    schema: await createSchema(),
    source,
    variableValues
  });
};
