import { Resolver, Query, Ctx, UseMiddleware } from "type-graphql";

import { User } from "../../entity/User";
import { MyContext } from "../../types/MyContext";
import { loggerMiddleware } from "../middleware/logger";

@Resolver()
export class MeResolver {
  @UseMiddleware(loggerMiddleware)
  @Query(() => User, { nullable: true })
  async me(@Ctx() ctx: MyContext): Promise<User | undefined> {
    // if we can't find a userId on the current session
    if (!ctx.req.session!.userId) {
      console.log("WHAAAAAT", ctx.req.session);
      return undefined;
    }

    return User.findOne(ctx.req.session!.userId);
  }
}
