import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Study_duplicated_by_instance_uidCreateInput } from "../../../inputs/Study_duplicated_by_instance_uidCreateInput";

@TypeGraphQL.ArgsType()
export class CreateStudy_duplicated_by_instance_uidArgs {
  @TypeGraphQL.Field(_type => Study_duplicated_by_instance_uidCreateInput, { nullable: false })
  data!: Study_duplicated_by_instance_uidCreateInput;
}
