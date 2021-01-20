import * as TypeGraphQL from "type-graphql";
import { FindManyNodule_analysis_request_historyArgs } from "./args/FindManyNodule_analysis_request_historyArgs";
import { Nodule_analysis_request_history } from "../../../models/Nodule_analysis_request_history";

@TypeGraphQL.Resolver(_of => Nodule_analysis_request_history)
export class FindManyNodule_analysis_request_historyResolver {
  @TypeGraphQL.Query(_returns => [Nodule_analysis_request_history], {
    nullable: false,
    description: undefined
  })
  async nodule_analysis_request_histories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyNodule_analysis_request_historyArgs): Promise<Nodule_analysis_request_history[]> {
    return ctx.prisma.nodule_analysis_request_history.findMany(args);
  }
}
