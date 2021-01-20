import * as TypeGraphQL from "type-graphql";
import { UpdateManyUser_signin_historyArgs } from "./args/UpdateManyUser_signin_historyArgs";
import { User_signin_history } from "../../../models/User_signin_history";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => User_signin_history)
export class UpdateManyUser_signin_historyResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyUser_signin_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyUser_signin_historyArgs): Promise<BatchPayload> {
    return ctx.prisma.user_signin_history.updateMany(args);
  }
}
