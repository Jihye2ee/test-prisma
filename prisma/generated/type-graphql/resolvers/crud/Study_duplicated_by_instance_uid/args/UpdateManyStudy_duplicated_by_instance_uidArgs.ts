import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Study_duplicated_by_instance_uidUpdateManyMutationInput } from "../../../inputs/Study_duplicated_by_instance_uidUpdateManyMutationInput";
import { Study_duplicated_by_instance_uidWhereInput } from "../../../inputs/Study_duplicated_by_instance_uidWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyStudy_duplicated_by_instance_uidArgs {
  @TypeGraphQL.Field(_type => Study_duplicated_by_instance_uidUpdateManyMutationInput, { nullable: false })
  data!: Study_duplicated_by_instance_uidUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Study_duplicated_by_instance_uidWhereInput, { nullable: true })
  where?: Study_duplicated_by_instance_uidWhereInput | undefined;
}
