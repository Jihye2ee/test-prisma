import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { StudyCreateWithoutInternal_pacs_instanceInput } from "../inputs/StudyCreateWithoutInternal_pacs_instanceInput";
import { StudyWhereUniqueInput } from "../inputs/StudyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StudyCreateManyWithoutInternal_pacs_instanceInput {
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
}
