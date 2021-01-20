import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { IntFilter } from "../inputs/IntFilter";
import { NullableStringFilter } from "../inputs/NullableStringFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StudyFilter } from "../inputs/StudyFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PatientWhereInput {
  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  seq?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  patient_uuid?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  patient_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  patient_name?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  patient_sex?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  creation_timestamp?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  patient_age?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => StudyFilter, {
    nullable: true,
    description: undefined
  })
  study?: StudyFilter | undefined;

  @TypeGraphQL.Field(_type => [PatientWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: PatientWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: PatientWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: PatientWhereInput[] | undefined;
}
