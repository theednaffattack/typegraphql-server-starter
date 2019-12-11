import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../../types/MyContext";

import logger from "pino";

// const { log } = console;

export const loggerMiddleware: MiddlewareFn<MyContext> = async (
  { info },
  next
) => {
  const start = Date.now();
  await next();
  const resolveTime = Date.now() - start;

  // console.log(`${info.parentType.name}.${info.fieldName} [${resolveTime} ms]`);

  // logger().info({
  //   type: "operation",
  //   name: args,
  //   ms: elapsedTimeInMs
  // });

  logger().info({
    type: "timing",
    name: `${info.parentType.name}.${info.fieldName}`,
    ms: `${resolveTime} ms`
  });

  // return next();
};
