import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { StudyUpdateWithoutPatientDataInput } from "../inputs/StudyUpdateWithoutPatientDataInput";
import { StudyWhereUniqueInput } from "../inputs/StudyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StudyUpdateWithWhereUniqueWithoutPatientInput {
  @TypeGraphQL.Field(_type => StudyWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: StudyWhereUniqueInput;

  @TypeGraphQL.Field(_type => StudyUpdateWithoutPatientDataInput, {
    nullable: false,
    description: undefined
  })
  data!: StudyUpdateWithoutPatientDataInput;
}
