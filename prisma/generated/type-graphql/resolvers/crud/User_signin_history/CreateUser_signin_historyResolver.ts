import * as TypeGraphQL from "type-graphql";
import { CreateUser_signin_historyArgs } from "./args/CreateUser_signin_historyArgs";
import { User_signin_history } from "../../../models/User_signin_history";

@TypeGraphQL.Resolver(_of => User_signin_history)
export class CreateUser_signin_historyResolver {
  @TypeGraphQL.Mutation(_returns => User_signin_history, {
    nullable: false,
    description: undefined
  })
  async createUser_signin_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateUser_signin_historyArgs): Promise<User_signin_history> {
    return ctx.prisma.user_signin_history.create(args);
  }
}
