import * as TypeGraphQL from "type-graphql";
import { UpsertUser_management_historyArgs } from "./args/UpsertUser_management_historyArgs";
import { User_management_history } from "../../../models/User_management_history";

@TypeGraphQL.Resolver(_of => User_management_history)
export class UpsertUser_management_historyResolver {
  @TypeGraphQL.Mutation(_returns => User_management_history, {
    nullable: false,
    description: undefined
  })
  async upsertUser_management_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertUser_management_historyArgs): Promise<User_management_history> {
    return ctx.prisma.user_management_history.upsert(args);
  }
}
