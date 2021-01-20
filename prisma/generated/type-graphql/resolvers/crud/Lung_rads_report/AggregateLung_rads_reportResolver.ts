import * as TypeGraphQL from "type-graphql";
import { AggregateLung_rads_reportArgs } from "./args/AggregateLung_rads_reportArgs";
import { Lung_rads_report } from "../../../models/Lung_rads_report";
import { AggregateLung_rads_report } from "../../outputs/AggregateLung_rads_report";

@TypeGraphQL.Resolver(_of => Lung_rads_report)
export class AggregateLung_rads_reportResolver {
  @TypeGraphQL.Query(_returns => AggregateLung_rads_report, {
    nullable: false,
    description: undefined
  })
  async aggregateLung_rads_report(@TypeGraphQL.Args() args: AggregateLung_rads_reportArgs): Promise<AggregateLung_rads_report> {
    return new AggregateLung_rads_report();
  }
}
