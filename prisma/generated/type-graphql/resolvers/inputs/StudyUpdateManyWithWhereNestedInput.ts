import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { StudyScalarWhereInput } from "../inputs/StudyScalarWhereInput";
import { StudyUpdateManyDataInput } from "../inputs/StudyUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StudyUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => StudyScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: StudyScalarWhereInput;

  @TypeGraphQL.Field(_type => StudyUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: StudyUpdateManyDataInput;
}
