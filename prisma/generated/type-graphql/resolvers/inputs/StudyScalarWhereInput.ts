import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { IntFilter } from "../inputs/IntFilter";
import { NullableBooleanFilter } from "../inputs/NullableBooleanFilter";
import { NullableIntFilter } from "../inputs/NullableIntFilter";
import { NullableStringFilter } from "../inputs/NullableStringFilter";
import { SeriesFilter } from "../inputs/SeriesFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StudyScalarWhereInput {
  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  seq?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  study_instance_uid?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  study_date?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  study_time?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  referring_physician_name?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  study_description?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  patient_uuid?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  analysis_request_timestamp?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  analysis_complete_timestamp?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  creation_time?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  last_update_time?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  internal_pacs_instance_id?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  study_uuid_defined_in_internal_pacs?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  tags?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => NullableBooleanFilter, {
    nullable: true,
    description: undefined
  })
  general_user_confirmed?: NullableBooleanFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  general_user_id?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => NullableIntFilter, {
    nullable: true,
    description: undefined
  })
  general_user_confirmed_timestamp?: NullableIntFilter | undefined;

  @TypeGraphQL.Field(_type => NullableBooleanFilter, {
    nullable: true,
    description: undefined
  })
  professor_confirmed?: NullableBooleanFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  professor_id?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => NullableIntFilter, {
    nullable: true,
    description: undefined
  })
  professor_confirmed_timestamp?: NullableIntFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  study_report?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => NullableBooleanFilter, {
    nullable: true,
    description: undefined
  })
  baseline?: NullableBooleanFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  before_confirm_study_report?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  study_lung_rads?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  delete_confirmed_timestamp?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  delete_confirmed_by?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  delete_rollback_timestamp?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  study_sync_confirmed_timestamp?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  institution?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => SeriesFilter, {
    nullable: true,
    description: undefined
  })
  series?: SeriesFilter | undefined;

  @TypeGraphQL.Field(_type => [StudyScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: StudyScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudyScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: StudyScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudyScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: StudyScalarWhereInput[] | undefined;
}
