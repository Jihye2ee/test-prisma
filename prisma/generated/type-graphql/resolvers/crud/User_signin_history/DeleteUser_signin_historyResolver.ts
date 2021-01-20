import * as TypeGraphQL from "type-graphql";
import { DeleteUser_signin_historyArgs } from "./args/DeleteUser_signin_historyArgs";
import { User_signin_history } from "../../../models/User_signin_history";

@TypeGraphQL.Resolver(_of => User_signin_history)
export class DeleteUser_signin_historyResolver {
  @TypeGraphQL.Mutation(_returns => User_signin_history, {
    nullable: true,
    description: undefined
  })
  async deleteUser_signin_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteUser_signin_historyArgs): Promise<User_signin_history | undefined> {
    return ctx.prisma.user_signin_history.delete(args);
  }
}
