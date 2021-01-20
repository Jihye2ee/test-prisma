import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { StudyCreateWithoutSeriesInput } from "../inputs/StudyCreateWithoutSeriesInput";
import { StudyUpdateWithoutSeriesDataInput } from "../inputs/StudyUpdateWithoutSeriesDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StudyUpsertWithoutSeriesInput {
  @TypeGraphQL.Field(_type => StudyUpdateWithoutSeriesDataInput, {
    nullable: false,
    description: undefined
  })
  update!: StudyUpdateWithoutSeriesDataInput;

  @TypeGraphQL.Field(_type => StudyCreateWithoutSeriesInput, {
    nullable: false,
    description: undefined
  })
  create!: StudyCreateWithoutSeriesInput;
}
