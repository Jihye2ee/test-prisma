import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { PatientCreateWithoutStudyInput } from "../inputs/PatientCreateWithoutStudyInput";
import { PatientWhereUniqueInput } from "../inputs/PatientWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PatientCreateOneWithoutStudyInput {
  @TypeGraphQL.Field(_type => PatientCreateWithoutStudyInput, {
    nullable: true,
    description: undefined
  })
  create?: PatientCreateWithoutStudyInput | undefined;

  @TypeGraphQL.Field(_type => PatientWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: PatientWhereUniqueInput | undefined;
}
