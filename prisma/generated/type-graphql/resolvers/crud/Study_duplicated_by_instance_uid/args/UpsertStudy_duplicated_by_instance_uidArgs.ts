import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Study_duplicated_by_instance_uidCreateInput } from "../../../inputs/Study_duplicated_by_instance_uidCreateInput";
import { Study_duplicated_by_instance_uidUpdateInput } from "../../../inputs/Study_duplicated_by_instance_uidUpdateInput";
import { Study_duplicated_by_instance_uidWhereUniqueInput } from "../../../inputs/Study_duplicated_by_instance_uidWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertStudy_duplicated_by_instance_uidArgs {
  @TypeGraphQL.Field(_type => Study_duplicated_by_instance_uidWhereUniqueInput, { nullable: false })
  where!: Study_duplicated_by_instance_uidWhereUniqueInput;

  @TypeGraphQL.Field(_type => Study_duplicated_by_instance_uidCreateInput, { nullable: false })
  create!: Study_duplicated_by_instance_uidCreateInput;

  @TypeGraphQL.Field(_type => Study_duplicated_by_instance_uidUpdateInput, { nullable: false })
  update!: Study_duplicated_by_instance_uidUpdateInput;
}
