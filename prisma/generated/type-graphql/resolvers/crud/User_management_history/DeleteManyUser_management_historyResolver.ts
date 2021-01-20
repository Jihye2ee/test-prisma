import * as TypeGraphQL from "type-graphql";
import { DeleteManyUser_management_historyArgs } from "./args/DeleteManyUser_management_historyArgs";
import { User_management_history } from "../../../models/User_management_history";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => User_management_history)
export class DeleteManyUser_management_historyResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyUser_management_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyUser_management_historyArgs): Promise<BatchPayload> {
    return ctx.prisma.user_management_history.deleteMany(args);
  }
}
