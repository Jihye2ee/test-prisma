import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { PatientCreateWithoutStudyInput } from "../inputs/PatientCreateWithoutStudyInput";
import { PatientUpdateWithoutStudyDataInput } from "../inputs/PatientUpdateWithoutStudyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PatientUpsertWithoutStudyInput {
  @TypeGraphQL.Field(_type => PatientUpdateWithoutStudyDataInput, {
    nullable: false,
    description: undefined
  })
  update!: PatientUpdateWithoutStudyDataInput;

  @TypeGraphQL.Field(_type => PatientCreateWithoutStudyInput, {
    nullable: false,
    description: undefined
  })
  create!: PatientCreateWithoutStudyInput;
}
