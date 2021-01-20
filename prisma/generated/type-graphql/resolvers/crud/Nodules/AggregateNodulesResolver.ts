import * as TypeGraphQL from "type-graphql";
import { AggregateNodulesArgs } from "./args/AggregateNodulesArgs";
import { Nodules } from "../../../models/Nodules";
import { AggregateNodules } from "../../outputs/AggregateNodules";

@TypeGraphQL.Resolver(_of => Nodules)
export class AggregateNodulesResolver {
  @TypeGraphQL.Query(_returns => AggregateNodules, {
    nullable: false,
    description: undefined
  })
  async aggregateNodules(@TypeGraphQL.Args() args: AggregateNodulesArgs): Promise<AggregateNodules> {
    return new AggregateNodules();
  }
}
