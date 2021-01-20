import * as TypeGraphQL from "type-graphql";
import { DeleteNodule_analysis_request_historyArgs } from "./args/DeleteNodule_analysis_request_historyArgs";
import { Nodule_analysis_request_history } from "../../../models/Nodule_analysis_request_history";

@TypeGraphQL.Resolver(_of => Nodule_analysis_request_history)
export class DeleteNodule_analysis_request_historyResolver {
  @TypeGraphQL.Mutation(_returns => Nodule_analysis_request_history, {
    nullable: true,
    description: undefined
  })
  async deleteNodule_analysis_request_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteNodule_analysis_request_historyArgs): Promise<Nodule_analysis_request_history | undefined> {
    return ctx.prisma.nodule_analysis_request_history.delete(args);
  }
}
