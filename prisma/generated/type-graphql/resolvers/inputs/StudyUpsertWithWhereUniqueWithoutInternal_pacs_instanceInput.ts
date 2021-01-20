import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { StudyCreateWithoutInternal_pacs_instanceInput } from "../inputs/StudyCreateWithoutInternal_pacs_instanceInput";
import { StudyUpdateWithoutInternal_pacs_instanceDataInput } from "../inputs/StudyUpdateWithoutInternal_pacs_instanceDataInput";
import { StudyWhereUniqueInput } from "../inputs/StudyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StudyUpsertWithWhereUniqueWithoutInternal_pacs_instanceInput {
  @TypeGraphQL.Field(_type => StudyWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: StudyWhereUniqueInput;

  @TypeGraphQL.Field(_type => StudyUpdateWithoutInternal_pacs_instanceDataInput, {
    nullable: false,
    description: undefined
  })
  update!: StudyUpdateWithoutInternal_pacs_instanceDataInput;

  @TypeGraphQL.Field(_type => StudyCreateWithoutInternal_pacs_instanceInput, {
    nullable: false,
    description: undefined
  })
  create!: StudyCreateWithoutInternal_pacs_instanceInput;
}
