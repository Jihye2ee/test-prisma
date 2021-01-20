import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Study_duplicated_by_instance_uidOrderByInput } from "../../../inputs/Study_duplicated_by_instance_uidOrderByInput";
import { Study_duplicated_by_instance_uidWhereInput } from "../../../inputs/Study_duplicated_by_instance_uidWhereInput";
import { Study_duplicated_by_instance_uidWhereUniqueInput } from "../../../inputs/Study_duplicated_by_instance_uidWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyStudy_duplicated_by_instance_uidArgs {
  @TypeGraphQL.Field(_type => Study_duplicated_by_instance_uidWhereInput, { nullable: true })
  where?: Study_duplicated_by_instance_uidWhereInput | undefined;

  @TypeGraphQL.Field(_type => Study_duplicated_by_instance_uidOrderByInput, { nullable: true })
  orderBy?: Study_duplicated_by_instance_uidOrderByInput | undefined;

  @TypeGraphQL.Field(_type => Study_duplicated_by_instance_uidWhereUniqueInput, { nullable: true })
  cursor?: Study_duplicated_by_instance_uidWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
