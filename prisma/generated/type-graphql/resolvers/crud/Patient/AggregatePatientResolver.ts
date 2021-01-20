import * as TypeGraphQL from "type-graphql";
import { AggregatePatientArgs } from "./args/AggregatePatientArgs";
import { Patient } from "../../../models/Patient";
import { AggregatePatient } from "../../outputs/AggregatePatient";

@TypeGraphQL.Resolver(_of => Patient)
export class AggregatePatientResolver {
  @TypeGraphQL.Query(_returns => AggregatePatient, {
    nullable: false,
    description: undefined
  })
  async aggregatePatient(@TypeGraphQL.Args() args: AggregatePatientArgs): Promise<AggregatePatient> {
    return new AggregatePatient();
  }
}
