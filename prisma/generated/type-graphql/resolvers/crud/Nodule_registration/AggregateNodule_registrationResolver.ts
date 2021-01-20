import * as TypeGraphQL from "type-graphql";
import { AggregateNodule_registrationArgs } from "./args/AggregateNodule_registrationArgs";
import { Nodule_registration } from "../../../models/Nodule_registration";
import { AggregateNodule_registration } from "../../outputs/AggregateNodule_registration";

@TypeGraphQL.Resolver(_of => Nodule_registration)
export class AggregateNodule_registrationResolver {
  @TypeGraphQL.Query(_returns => AggregateNodule_registration, {
    nullable: false,
    description: undefined
  })
  async aggregateNodule_registration(@TypeGraphQL.Args() args: AggregateNodule_registrationArgs): Promise<AggregateNodule_registration> {
    return new AggregateNodule_registration();
  }
}
