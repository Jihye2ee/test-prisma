import * as TypeGraphQL from "type-graphql";
import { UpdateManyUser_study_open_historyArgs } from "./args/UpdateManyUser_study_open_historyArgs";
import { User_study_open_history } from "../../../models/User_study_open_history";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => User_study_open_history)
export class UpdateManyUser_study_open_historyResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyUser_study_open_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyUser_study_open_historyArgs): Promise<BatchPayload> {
    return ctx.prisma.user_study_open_history.updateMany(args);
  }
}
