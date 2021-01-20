import * as TypeGraphQL from "type-graphql";
import { AggregateSeriesArgs } from "./args/AggregateSeriesArgs";
import { Series } from "../../../models/Series";
import { AggregateSeries } from "../../outputs/AggregateSeries";

@TypeGraphQL.Resolver(_of => Series)
export class AggregateSeriesResolver {
  @TypeGraphQL.Query(_returns => AggregateSeries, {
    nullable: false,
    description: undefined
  })
  async aggregateSeries(@TypeGraphQL.Args() args: AggregateSeriesArgs): Promise<AggregateSeries> {
    return new AggregateSeries();
  }
}
