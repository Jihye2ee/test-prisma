import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { IntFilter } from "../inputs/IntFilter";
import { NullableBooleanFilter } from "../inputs/NullableBooleanFilter";
import { NullableStringFilter } from "../inputs/NullableStringFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class Lung_rads_reportWhereInput {
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

  @TypeGraphQL.Field(_type => NullableBooleanFilter, {
    nullable: true,
    description: undefined
  })
  is_bronchial?: NullableBooleanFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  is_bronchial_text?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => NullableBooleanFilter, {
    nullable: true,
    description: undefined
  })
  is_induration?: NullableBooleanFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  is_induration_text?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => NullableBooleanFilter, {
    nullable: true,
    description: undefined
  })
  is_atelectasis?: NullableBooleanFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  is_atelectasis_text?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => NullableBooleanFilter, {
    nullable: true,
    description: undefined
  })
  is_lymph_node?: NullableBooleanFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  is_lymph_node_text?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => NullableBooleanFilter, {
    nullable: true,
    description: undefined
  })
  is_cancer_others?: NullableBooleanFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  is_cancer_others_text?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => NullableBooleanFilter, {
    nullable: true,
    description: undefined
  })
  is_coronary_calcification?: NullableBooleanFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  selected_coronary_calcification?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => NullableBooleanFilter, {
    nullable: true,
    description: undefined
  })
  is_emphysema?: NullableBooleanFilter | undefined;

  @TypeGraphQL.Field(_type => NullableBooleanFilter, {
    nullable: true,
    description: undefined
  })
  is_interstitial?: NullableBooleanFilter | undefined;

  @TypeGraphQL.Field(_type => NullableBooleanFilter, {
    nullable: true,
    description: undefined
  })
  is_pneumonia?: NullableBooleanFilter | undefined;

  @TypeGraphQL.Field(_type => NullableBooleanFilter, {
    nullable: true,
    description: undefined
  })
  is_extrapulmonary?: NullableBooleanFilter | undefined;

  @TypeGraphQL.Field(_type => NullableBooleanFilter, {
    nullable: true,
    description: undefined
  })
  is_aneurysm?: NullableBooleanFilter | undefined;

  @TypeGraphQL.Field(_type => NullableBooleanFilter, {
    nullable: true,
    description: undefined
  })
  is_effusion?: NullableBooleanFilter | undefined;

  @TypeGraphQL.Field(_type => NullableBooleanFilter, {
    nullable: true,
    description: undefined
  })
  is_no_nodule_others?: NullableBooleanFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  is_no_nodule_others_text?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => NullableBooleanFilter, {
    nullable: true,
    description: undefined
  })
  is_tuberculosis?: NullableBooleanFilter | undefined;

  @TypeGraphQL.Field(_type => NullableBooleanFilter, {
    nullable: true,
    description: undefined
  })
  is_other_diseases?: NullableBooleanFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  is_other_diseases_text?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  final_rads_score?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  additional_report?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  lung_rads_report_result?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => [Lung_rads_reportWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: Lung_rads_reportWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lung_rads_reportWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: Lung_rads_reportWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lung_rads_reportWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: Lung_rads_reportWhereInput[] | undefined;
}
