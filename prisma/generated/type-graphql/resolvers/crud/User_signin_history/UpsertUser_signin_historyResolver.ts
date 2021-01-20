import * as TypeGraphQL from "type-graphql";
import { UpsertUser_signin_historyArgs } from "./args/UpsertUser_signin_historyArgs";
import { User_signin_history } from "../../../models/User_signin_history";

@TypeGraphQL.Resolver(_of => User_signin_history)
export class UpsertUser_signin_historyResolver {
  @TypeGraphQL.Mutation(_returns => User_signin_history, {
    nullable: false,
    description: undefined
  })
  async upsertUser_signin_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertUser_signin_historyArgs): Promise<User_signin_history> {
    return ctx.prisma.user_signin_history.upsert(args);
  }
}
