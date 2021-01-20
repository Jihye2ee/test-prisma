import * as TypeGraphQL from "type-graphql";
import { FindManyUser_study_open_historyArgs } from "./args/FindManyUser_study_open_historyArgs";
import { User_study_open_history } from "../../../models/User_study_open_history";

@TypeGraphQL.Resolver(_of => User_study_open_history)
export class FindManyUser_study_open_historyResolver {
  @TypeGraphQL.Query(_returns => [User_study_open_history], {
    nullable: false,
    description: undefined
  })
  async user_study_open_histories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyUser_study_open_historyArgs): Promise<User_study_open_history[]> {
    return ctx.prisma.user_study_open_history.findMany(args);
  }
}
