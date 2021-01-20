import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Study_duplicated_by_instance_uidWhereUniqueInput } from "../../../inputs/Study_duplicated_by_instance_uidWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteStudy_duplicated_by_instance_uidArgs {
  @TypeGraphQL.Field(_type => Study_duplicated_by_instance_uidWhereUniqueInput, { nullable: false })
  where!: Study_duplicated_by_instance_uidWhereUniqueInput;
}
