import * as TypeGraphQL from "type-graphql";
import { UpdateManyNodule_analysis_request_historyArgs } from "./args/UpdateManyNodule_analysis_request_historyArgs";
import { Nodule_analysis_request_history } from "../../../models/Nodule_analysis_request_history";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Nodule_analysis_request_history)
export class UpdateManyNodule_analysis_request_historyResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyNodule_analysis_request_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyNodule_analysis_request_historyArgs): Promise<BatchPayload> {
    return ctx.prisma.nodule_analysis_request_history.updateMany(args);
  }
}
