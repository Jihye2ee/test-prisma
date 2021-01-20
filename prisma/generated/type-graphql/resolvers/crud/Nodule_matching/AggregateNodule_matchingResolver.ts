import * as TypeGraphQL from "type-graphql";
import { AggregateNodule_matchingArgs } from "./args/AggregateNodule_matchingArgs";
import { Nodule_matching } from "../../../models/Nodule_matching";
import { AggregateNodule_matching } from "../../outputs/AggregateNodule_matching";

@TypeGraphQL.Resolver(_of => Nodule_matching)
export class AggregateNodule_matchingResolver {
  @TypeGraphQL.Query(_returns => AggregateNodule_matching, {
    nullable: false,
    description: undefined
  })
  async aggregateNodule_matching(@TypeGraphQL.Args() args: AggregateNodule_matchingArgs): Promise<AggregateNodule_matching> {
    return new AggregateNodule_matching();
  }
}
