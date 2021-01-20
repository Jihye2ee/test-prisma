import * as TypeGraphQL from "type-graphql";
import { UpdateUser_management_historyArgs } from "./args/UpdateUser_management_historyArgs";
import { User_management_history } from "../../../models/User_management_history";

@TypeGraphQL.Resolver(_of => User_management_history)
export class UpdateUser_management_historyResolver {
  @TypeGraphQL.Mutation(_returns => User_management_history, {
    nullable: true,
    description: undefined
  })
  async updateUser_management_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateUser_management_historyArgs): Promise<User_management_history | undefined> {
    return ctx.prisma.user_management_history.update(args);
  }
}
