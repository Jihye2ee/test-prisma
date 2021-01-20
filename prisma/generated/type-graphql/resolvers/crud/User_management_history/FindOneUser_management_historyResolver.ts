import * as TypeGraphQL from "type-graphql";
import { FindOneUser_management_historyArgs } from "./args/FindOneUser_management_historyArgs";
import { User_management_history } from "../../../models/User_management_history";

@TypeGraphQL.Resolver(_of => User_management_history)
export class FindOneUser_management_historyResolver {
  @TypeGraphQL.Query(_returns => User_management_history, {
    nullable: true,
    description: undefined
  })
  async user_management_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneUser_management_historyArgs): Promise<User_management_history | undefined> {
    return ctx.prisma.user_management_history.findOne(args);
  }
}
