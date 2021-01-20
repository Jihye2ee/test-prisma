import * as TypeGraphQL from "type-graphql";
import { UpdateUser_signin_historyArgs } from "./args/UpdateUser_signin_historyArgs";
import { User_signin_history } from "../../../models/User_signin_history";

@TypeGraphQL.Resolver(_of => User_signin_history)
export class UpdateUser_signin_historyResolver {
  @TypeGraphQL.Mutation(_returns => User_signin_history, {
    nullable: true,
    description: undefined
  })
  async updateUser_signin_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateUser_signin_historyArgs): Promise<User_signin_history | undefined> {
    return ctx.prisma.user_signin_history.update(args);
  }
}
