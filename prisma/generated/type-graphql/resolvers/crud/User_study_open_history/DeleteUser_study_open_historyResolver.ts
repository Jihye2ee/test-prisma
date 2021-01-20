import * as TypeGraphQL from "type-graphql";
import { DeleteUser_study_open_historyArgs } from "./args/DeleteUser_study_open_historyArgs";
import { User_study_open_history } from "../../../models/User_study_open_history";

@TypeGraphQL.Resolver(_of => User_study_open_history)
export class DeleteUser_study_open_historyResolver {
  @TypeGraphQL.Mutation(_returns => User_study_open_history, {
    nullable: true,
    description: undefined
  })
  async deleteUser_study_open_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteUser_study_open_historyArgs): Promise<User_study_open_history | undefined> {
    return ctx.prisma.user_study_open_history.delete(args);
  }
}
