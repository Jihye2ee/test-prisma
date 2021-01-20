import * as TypeGraphQL from "type-graphql";
import { FindOneUser_study_open_historyArgs } from "./args/FindOneUser_study_open_historyArgs";
import { User_study_open_history } from "../../../models/User_study_open_history";

@TypeGraphQL.Resolver(_of => User_study_open_history)
export class FindOneUser_study_open_historyResolver {
  @TypeGraphQL.Query(_returns => User_study_open_history, {
    nullable: true,
    description: undefined
  })
  async user_study_open_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneUser_study_open_historyArgs): Promise<User_study_open_history | undefined> {
    return ctx.prisma.user_study_open_history.findOne(args);
  }
}
