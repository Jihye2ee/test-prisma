import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { StudyCreateManyWithoutPatientInput } from "../inputs/StudyCreateManyWithoutPatientInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PatientCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  patient_uuid!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  patient_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  patient_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  patient_sex!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  creation_timestamp!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  patient_age?: string | undefined;

  @TypeGraphQL.Field(_type => StudyCreateManyWithoutPatientInput, {
    nullable: true,
    description: undefined
  })
  study?: StudyCreateManyWithoutPatientInput | undefined;
}
