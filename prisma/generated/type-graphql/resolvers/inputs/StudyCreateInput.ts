import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { Internal_pacs_instanceCreateOneWithoutStudyInput } from "../inputs/Internal_pacs_instanceCreateOneWithoutStudyInput";
import { PatientCreateOneWithoutStudyInput } from "../inputs/PatientCreateOneWithoutStudyInput";
import { SeriesCreateManyWithoutStudyInput } from "../inputs/SeriesCreateManyWithoutStudyInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StudyCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  study_instance_uid!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  study_date?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  study_time?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  referring_physician_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  study_description?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  analysis_request_timestamp?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  analysis_complete_timestamp?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  creation_time?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  last_update_time?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  study_uuid_defined_in_internal_pacs?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  tags?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  general_user_confirmed?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  general_user_id?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  general_user_confirmed_timestamp?: number | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  professor_confirmed?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  professor_id?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  professor_confirmed_timestamp?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  study_report?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  baseline?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  before_confirm_study_report?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  study_lung_rads?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  delete_confirmed_timestamp?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  delete_confirmed_by?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  delete_rollback_timestamp?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  study_sync_confirmed_timestamp?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  institution?: string | undefined;

  @TypeGraphQL.Field(_type => Internal_pacs_instanceCreateOneWithoutStudyInput, {
    nullable: true,
    description: undefined
  })
  internal_pacs_instance?: Internal_pacs_instanceCreateOneWithoutStudyInput | undefined;

  @TypeGraphQL.Field(_type => PatientCreateOneWithoutStudyInput, {
    nullable: false,
    description: undefined
  })
  patient!: PatientCreateOneWithoutStudyInput;

  @TypeGraphQL.Field(_type => SeriesCreateManyWithoutStudyInput, {
    nullable: true,
    description: undefined
  })
  series?: SeriesCreateManyWithoutStudyInput | undefined;
}
