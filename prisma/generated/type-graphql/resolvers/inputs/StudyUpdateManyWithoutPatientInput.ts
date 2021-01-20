import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { StudyCreateWithoutPatientInput } from "../inputs/StudyCreateWithoutPatientInput";
import { StudyScalarWhereInput } from "../inputs/StudyScalarWhereInput";
import { StudyUpdateManyWithWhereNestedInput } from "../inputs/StudyUpdateManyWithWhereNestedInput";
import { StudyUpdateWithWhereUniqueWithoutPatientInput } from "../inputs/StudyUpdateWithWhereUniqueWithoutPatientInput";
import { StudyUpsertWithWhereUniqueWithoutPatientInput } from "../inputs/StudyUpsertWithWhereUniqueWithoutPatientInput";
import { StudyWhereUniqueInput } from "../inputs/StudyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StudyUpdateManyWithoutPatientInput {
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

  @TypeGraphQL.Field(_type => [StudyWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: StudyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudyWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: StudyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudyWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: StudyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudyUpdateWithWhereUniqueWithoutPatientInput], {
    nullable: true,
    description: undefined
  })
  update?: StudyUpdateWithWhereUniqueWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudyUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: StudyUpdateManyWithWhereNestedInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudyScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: StudyScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudyUpsertWithWhereUniqueWithoutPatientInput], {
    nullable: true,
    description: undefined
  })
  upsert?: StudyUpsertWithWhereUniqueWithoutPatientInput[] | undefined;
}
