import * as TypeGraphQL from "type-graphql";
import { AggregateNodule_analysis_request_historyArgs } from "./args/AggregateNodule_analysis_request_historyArgs";
import { Nodule_analysis_request_history } from "../../../models/Nodule_analysis_request_history";
import { AggregateNodule_analysis_request_history } from "../../outputs/AggregateNodule_analysis_request_history";

@TypeGraphQL.Resolver(_of => Nodule_analysis_request_history)
export class AggregateNodule_analysis_request_historyResolver {
  @TypeGraphQL.Query(_returns => AggregateNodule_analysis_request_history, {
    nullable: false,
    description: undefined
  })
  async aggregateNodule_analysis_request_history(@TypeGraphQL.Args() args: AggregateNodule_analysis_request_historyArgs): Promise<AggregateNodule_analysis_request_history> {
    return new AggregateNodule_analysis_request_history();
  }
}
