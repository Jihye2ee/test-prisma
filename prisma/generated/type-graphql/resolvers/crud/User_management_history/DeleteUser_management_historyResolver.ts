import * as TypeGraphQL from "type-graphql";
import { DeleteUser_management_historyArgs } from "./args/DeleteUser_management_historyArgs";
import { User_management_history } from "../../../models/User_management_history";

@TypeGraphQL.Resolver(_of => User_management_history)
export class DeleteUser_management_historyResolver {
  @TypeGraphQL.Mutation(_returns => User_management_history, {
    nullable: true,
    description: undefined
  })
  async deleteUser_management_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteUser_management_historyArgs): Promise<User_management_history | undefined> {
    return ctx.prisma.user_management_history.delete(args);
  }
}
