import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { StudyUpdateWithoutInternal_pacs_instanceDataInput } from "../inputs/StudyUpdateWithoutInternal_pacs_instanceDataInput";
import { StudyWhereUniqueInput } from "../inputs/StudyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StudyUpdateWithWhereUniqueWithoutInternal_pacs_instanceInput {
  @TypeGraphQL.Field(_type => StudyWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: StudyWhereUniqueInput;

  @TypeGraphQL.Field(_type => StudyUpdateWithoutInternal_pacs_instanceDataInput, {
    nullable: false,
    description: undefined
  })
  data!: StudyUpdateWithoutInternal_pacs_instanceDataInput;
}
