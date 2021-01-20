import * as TypeGraphQL from "type-graphql";
import { CreateUser_management_historyArgs } from "./args/CreateUser_management_historyArgs";
import { User_management_history } from "../../../models/User_management_history";

@TypeGraphQL.Resolver(_of => User_management_history)
export class CreateUser_management_historyResolver {
  @TypeGraphQL.Mutation(_returns => User_management_history, {
    nullable: false,
    description: undefined
  })
  async createUser_management_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateUser_management_historyArgs): Promise<User_management_history> {
    return ctx.prisma.user_management_history.create(args);
  }
}
