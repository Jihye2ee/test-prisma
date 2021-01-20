import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { StudyWhereInput } from "../inputs/StudyWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StudyFilter {
  @TypeGraphQL.Field(_type => StudyWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: StudyWhereInput | undefined;

  @TypeGraphQL.Field(_type => StudyWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: StudyWhereInput | undefined;

  @TypeGraphQL.Field(_type => StudyWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: StudyWhereInput | undefined;
}
