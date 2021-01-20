import * as TypeGraphQL from "type-graphql";
import { FindOneUser_signin_historyArgs } from "./args/FindOneUser_signin_historyArgs";
import { User_signin_history } from "../../../models/User_signin_history";

@TypeGraphQL.Resolver(_of => User_signin_history)
export class FindOneUser_signin_historyResolver {
  @TypeGraphQL.Query(_returns => User_signin_history, {
    nullable: true,
    description: undefined
  })
  async user_signin_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneUser_signin_historyArgs): Promise<User_signin_history | undefined> {
    return ctx.prisma.user_signin_history.findOne(args);
  }
}
