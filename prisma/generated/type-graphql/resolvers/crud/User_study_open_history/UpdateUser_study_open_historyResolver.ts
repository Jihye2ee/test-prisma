import * as TypeGraphQL from "type-graphql";
import { UpdateUser_study_open_historyArgs } from "./args/UpdateUser_study_open_historyArgs";
import { User_study_open_history } from "../../../models/User_study_open_history";

@TypeGraphQL.Resolver(_of => User_study_open_history)
export class UpdateUser_study_open_historyResolver {
  @TypeGraphQL.Mutation(_returns => User_study_open_history, {
    nullable: true,
    description: undefined
  })
  async updateUser_study_open_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateUser_study_open_historyArgs): Promise<User_study_open_history | undefined> {
    return ctx.prisma.user_study_open_history.update(args);
  }
}
