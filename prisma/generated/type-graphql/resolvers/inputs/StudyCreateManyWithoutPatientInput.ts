import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { StudyCreateWithoutPatientInput } from "../inputs/StudyCreateWithoutPatientInput";
import { StudyWhereUniqueInput } from "../inputs/StudyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StudyCreateManyWithoutPatientInput {
  @TypeGraphQL.Field(_type => [StudyCreateWithoutPatientInput], {
    nullable: true,
    description: undefined
  })
  create?: StudyCreateWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudyWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: StudyWhereUniqueInput[] | undefined;
}
