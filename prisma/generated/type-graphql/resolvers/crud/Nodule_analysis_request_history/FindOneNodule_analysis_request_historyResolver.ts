import * as TypeGraphQL from "type-graphql";
import { FindOneNodule_analysis_request_historyArgs } from "./args/FindOneNodule_analysis_request_historyArgs";
import { Nodule_analysis_request_history } from "../../../models/Nodule_analysis_request_history";

@TypeGraphQL.Resolver(_of => Nodule_analysis_request_history)
export class FindOneNodule_analysis_request_historyResolver {
  @TypeGraphQL.Query(_returns => Nodule_analysis_request_history, {
    nullable: true,
    description: undefined
  })
  async nodule_analysis_request_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneNodule_analysis_request_historyArgs): Promise<Nodule_analysis_request_history | undefined> {
    return ctx.prisma.nodule_analysis_request_history.findOne(args);
  }
}
