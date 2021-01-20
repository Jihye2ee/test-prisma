import * as TypeGraphQL from "type-graphql";
import { UpsertUser_study_open_historyArgs } from "./args/UpsertUser_study_open_historyArgs";
import { User_study_open_history } from "../../../models/User_study_open_history";

@TypeGraphQL.Resolver(_of => User_study_open_history)
export class UpsertUser_study_open_historyResolver {
  @TypeGraphQL.Mutation(_returns => User_study_open_history, {
    nullable: false,
    description: undefined
  })
  async upsertUser_study_open_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertUser_study_open_historyArgs): Promise<User_study_open_history> {
    return ctx.prisma.user_study_open_history.upsert(args);
  }
}
