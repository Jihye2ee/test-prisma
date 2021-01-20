import * as TypeGraphQL from "type-graphql";
import { UpdateNodule_analysis_request_historyArgs } from "./args/UpdateNodule_analysis_request_historyArgs";
import { Nodule_analysis_request_history } from "../../../models/Nodule_analysis_request_history";

@TypeGraphQL.Resolver(_of => Nodule_analysis_request_history)
export class UpdateNodule_analysis_request_historyResolver {
  @TypeGraphQL.Mutation(_returns => Nodule_analysis_request_history, {
    nullable: true,
    description: undefined
  })
  async updateNodule_analysis_request_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateNodule_analysis_request_historyArgs): Promise<Nodule_analysis_request_history | undefined> {
    return ctx.prisma.nodule_analysis_request_history.update(args);
  }
}
