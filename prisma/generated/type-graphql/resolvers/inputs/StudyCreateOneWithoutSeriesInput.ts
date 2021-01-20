import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { StudyCreateWithoutSeriesInput } from "../inputs/StudyCreateWithoutSeriesInput";
import { StudyWhereUniqueInput } from "../inputs/StudyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StudyCreateOneWithoutSeriesInput {
  @TypeGraphQL.Field(_type => StudyCreateWithoutSeriesInput, {
    nullable: true,
    description: undefined
  })
  create?: StudyCreateWithoutSeriesInput | undefined;

  @TypeGraphQL.Field(_type => StudyWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: StudyWhereUniqueInput | undefined;
}
