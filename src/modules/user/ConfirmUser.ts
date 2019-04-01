import { Arg, Resolver, Mutation } from "type-graphql";

// import { MyContext } from "src/types/MyContext";
import { redis } from "../../redis";
import { User } from "../../entity/User";

@Resolver()
export class ConfirmUserResolver {
  @Mutation(() => Boolean)
  async confirmUser(
    @Arg("token") token: string
    // @Ctx() ctx: MyContext
  ): Promise<boolean> {
    console.log("working!");
    const userId = await redis.get(token);

    if (!userId) {
      return false;
    }

    // update the user to be confirmed and ditch the token from redis
    // @todo: prefix ALL redis tokens for readability
    await User.update({ id: userId }, { confirmed: true });
    await redis.del(token);

    return true;
  }
}
