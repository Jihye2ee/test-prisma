import * as TypeGraphQL from "type-graphql";
import { User } from "../../../models/User";
import { User_signin_history } from "../../../models/User_signin_history";

@TypeGraphQL.Resolver(_of => User_signin_history)
export class User_signin_historyRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false,
    description: undefined,
  })
  async user(@TypeGraphQL.Root() user_signin_history: User_signin_history, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return ctx.prisma.user_signin_history.findOne({
      where: {
        seq: user_signin_history.seq,
      },
    }).user({});
  }
}
