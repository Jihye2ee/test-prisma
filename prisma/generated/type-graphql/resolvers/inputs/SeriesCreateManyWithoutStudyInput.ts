import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { SeriesCreateWithoutStudyInput } from "../inputs/SeriesCreateWithoutStudyInput";
import { SeriesWhereUniqueInput } from "../inputs/SeriesWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SeriesCreateManyWithoutStudyInput {
  @TypeGraphQL.Field(_type => [SeriesCreateWithoutStudyInput], {
    nullable: true,
    description: undefined
  })
  create?: SeriesCreateWithoutStudyInput[] | undefined;

  @TypeGraphQL.Field(_type => [SeriesWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: SeriesWhereUniqueInput[] | undefined;
}
