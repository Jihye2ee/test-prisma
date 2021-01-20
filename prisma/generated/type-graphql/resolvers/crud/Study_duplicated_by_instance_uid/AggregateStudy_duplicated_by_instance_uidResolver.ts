import * as TypeGraphQL from "type-graphql";
import { AggregateStudy_duplicated_by_instance_uidArgs } from "./args/AggregateStudy_duplicated_by_instance_uidArgs";
import { Study_duplicated_by_instance_uid } from "../../../models/Study_duplicated_by_instance_uid";
import { AggregateStudy_duplicated_by_instance_uid } from "../../outputs/AggregateStudy_duplicated_by_instance_uid";

@TypeGraphQL.Resolver(_of => Study_duplicated_by_instance_uid)
export class AggregateStudy_duplicated_by_instance_uidResolver {
  @TypeGraphQL.Query(_returns => AggregateStudy_duplicated_by_instance_uid, {
    nullable: false,
    description: undefined
  })
  async aggregateStudy_duplicated_by_instance_uid(@TypeGraphQL.Args() args: AggregateStudy_duplicated_by_instance_uidArgs): Promise<AggregateStudy_duplicated_by_instance_uid> {
    return new AggregateStudy_duplicated_by_instance_uid();
  }
}
