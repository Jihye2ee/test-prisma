import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { IntFilter } from "../inputs/IntFilter";
import { NullableStringFilter } from "../inputs/NullableStringFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StudyWhereInput } from "../inputs/StudyWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SeriesWhereInput {
  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  seq?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  series_instance_uid?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  modality?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  series_uuid_defined_in_internal_pacs?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  series_number?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  creation_timestamp?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  update_timestamp?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  series_description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  first_instances_uuid_defined_in_internal_pacs?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  study_instance_uid?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  nodule_count?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  comment?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => [SeriesWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: SeriesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SeriesWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: SeriesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SeriesWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: SeriesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StudyWhereInput, {
    nullable: true,
    description: undefined
  })
  study?: StudyWhereInput | undefined;
}
