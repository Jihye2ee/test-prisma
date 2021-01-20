import * as TypeGraphQL from "type-graphql";
import { User } from "../../../models/User";
import { User_signin_history } from "../../../models/User_signin_history";
import { UserUser_signin_historyArgs } from "./args/UserUser_signin_historyArgs";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [User_signin_history], {
    nullable: true,
    description: undefined,
  })
  async user_signin_history(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserUser_signin_historyArgs): Promise<User_signin_history[] | undefined> {
    return ctx.prisma.user.findOne({
      where: {
        seq: user.seq,
      },
    }).user_signin_history(args);
  }
}
