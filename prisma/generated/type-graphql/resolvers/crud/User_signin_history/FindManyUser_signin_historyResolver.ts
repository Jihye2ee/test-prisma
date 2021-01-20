import * as TypeGraphQL from "type-graphql";
import { FindManyUser_signin_historyArgs } from "./args/FindManyUser_signin_historyArgs";
import { User_signin_history } from "../../../models/User_signin_history";

@TypeGraphQL.Resolver(_of => User_signin_history)
export class FindManyUser_signin_historyResolver {
  @TypeGraphQL.Query(_returns => [User_signin_history], {
    nullable: false,
    description: undefined
  })
  async user_signin_histories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyUser_signin_historyArgs): Promise<User_signin_history[]> {
    return ctx.prisma.user_signin_history.findMany(args);
  }
}
