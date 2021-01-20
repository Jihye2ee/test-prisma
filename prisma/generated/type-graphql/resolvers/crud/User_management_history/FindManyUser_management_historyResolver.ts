import * as TypeGraphQL from "type-graphql";
import { FindManyUser_management_historyArgs } from "./args/FindManyUser_management_historyArgs";
import { User_management_history } from "../../../models/User_management_history";

@TypeGraphQL.Resolver(_of => User_management_history)
export class FindManyUser_management_historyResolver {
  @TypeGraphQL.Query(_returns => [User_management_history], {
    nullable: false,
    description: undefined
  })
  async user_management_histories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyUser_management_historyArgs): Promise<User_management_history[]> {
    return ctx.prisma.user_management_history.findMany(args);
  }
}
