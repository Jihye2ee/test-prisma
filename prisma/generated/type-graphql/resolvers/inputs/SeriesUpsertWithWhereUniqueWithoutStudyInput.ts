import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { SeriesCreateWithoutStudyInput } from "../inputs/SeriesCreateWithoutStudyInput";
import { SeriesUpdateWithoutStudyDataInput } from "../inputs/SeriesUpdateWithoutStudyDataInput";
import { SeriesWhereUniqueInput } from "../inputs/SeriesWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SeriesUpsertWithWhereUniqueWithoutStudyInput {
  @TypeGraphQL.Field(_type => SeriesWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: SeriesWhereUniqueInput;

  @TypeGraphQL.Field(_type => SeriesUpdateWithoutStudyDataInput, {
    nullable: false,
    description: undefined
  })
  update!: SeriesUpdateWithoutStudyDataInput;

  @TypeGraphQL.Field(_type => SeriesCreateWithoutStudyInput, {
    nullable: false,
    description: undefined
  })
  create!: SeriesCreateWithoutStudyInput;
}
