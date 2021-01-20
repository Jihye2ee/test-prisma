import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { IntFilter } from "../inputs/IntFilter";
import { NullableIntFilter } from "../inputs/NullableIntFilter";
import { NullableStringFilter } from "../inputs/NullableStringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class Garbage_collectionWhereInput {
  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  seq?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => NullableIntFilter, {
    nullable: true,
    description: undefined
  })
  creation_timestamp?: NullableIntFilter | undefined;

  @TypeGraphQL.Field(_type => NullableIntFilter, {
    nullable: true,
    description: undefined
  })
  error_timestamp?: NullableIntFilter | undefined;

  @TypeGraphQL.Field(_type => NullableIntFilter, {
    nullable: true,
    description: undefined
  })
  finish_timestamp?: NullableIntFilter | undefined;

  @TypeGraphQL.Field(_type => NullableIntFilter, {
    nullable: true,
    description: undefined
  })
  retry_count?: NullableIntFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  series_instance_uid?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  series_uuid_defined_in_internal_pacs?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => NullableIntFilter, {
    nullable: true,
    description: undefined
  })
  start_timestamp?: NullableIntFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  study_instance_uid?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  study_uuid_defined_in_internal_pacs?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => [Garbage_collectionWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: Garbage_collectionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Garbage_collectionWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: Garbage_collectionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Garbage_collectionWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: Garbage_collectionWhereInput[] | undefined;
}
