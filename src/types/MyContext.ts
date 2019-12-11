import { NextFunction, Request, Response } from "express";
import { GraphQLResolveInfo, GraphQLArgs } from "graphql";

interface GraphQlInputs {
  args: GraphQLArgs;
  info: GraphQLResolveInfo;
}

export interface MyContext {
  gqlOpts: GraphQlInputs;
  req: Request;
  res: Response;
  next: NextFunction;
}
