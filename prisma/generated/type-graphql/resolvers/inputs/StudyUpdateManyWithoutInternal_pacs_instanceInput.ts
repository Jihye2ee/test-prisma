import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { StudyCreateWithoutInternal_pacs_instanceInput } from "../inputs/StudyCreateWithoutInternal_pacs_instanceInput";
import { StudyScalarWhereInput } from "../inputs/StudyScalarWhereInput";
import { StudyUpdateManyWithWhereNestedInput } from "../inputs/StudyUpdateManyWithWhereNestedInput";
import { StudyUpdateWithWhereUniqueWithoutInternal_pacs_instanceInput } from "../inputs/StudyUpdateWithWhereUniqueWithoutInternal_pacs_instanceInput";
import { StudyUpsertWithWhereUniqueWithoutInternal_pacs_instanceInput } from "../inputs/StudyUpsertWithWhereUniqueWithoutInternal_pacs_instanceInput";
import { StudyWhereUniqueInput } from "../inputs/StudyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StudyUpdateManyWithoutInternal_pacs_instanceInput {
  @TypeGraphQL.Field(_type => [StudyCreateWithoutInternal_pacs_instanceInput], {
    nullable: true,
    description: undefined
  })
  create?: StudyCreateWithoutInternal_pacs_instanceInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [StudyUpdateWithWhereUniqueWithoutInternal_pacs_instanceInput], {
    nullable: true,
    description: undefined
  })
  update?: StudyUpdateWithWhereUniqueWithoutInternal_pacs_instanceInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [StudyUpsertWithWhereUniqueWithoutInternal_pacs_instanceInput], {
    nullable: true,
    description: undefined
  })
  upsert?: StudyUpsertWithWhereUniqueWithoutInternal_pacs_instanceInput[] | undefined;
}
