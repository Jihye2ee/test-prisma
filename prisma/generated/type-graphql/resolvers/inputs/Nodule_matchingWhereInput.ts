import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { IntFilter } from "../inputs/IntFilter";
import { NullableStringFilter } from "../inputs/NullableStringFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class Nodule_matchingWhereInput {
  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  seq?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  nodule_matching_request_uuid?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  study_instance_uid?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  series_instance_uid?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  nodule_uuid?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  comparison_study_instance_uid?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  comparison_series_instance_uid?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  comparison_nodule_uuid?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  creation_timestamp?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  user_id?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  link_status?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => [Nodule_matchingWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: Nodule_matchingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Nodule_matchingWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: Nodule_matchingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Nodule_matchingWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: Nodule_matchingWhereInput[] | undefined;
}
