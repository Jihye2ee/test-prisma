import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { StudyCreateWithoutSeriesInput } from "../inputs/StudyCreateWithoutSeriesInput";
import { StudyUpdateWithoutSeriesDataInput } from "../inputs/StudyUpdateWithoutSeriesDataInput";
import { StudyUpsertWithoutSeriesInput } from "../inputs/StudyUpsertWithoutSeriesInput";
import { StudyWhereUniqueInput } from "../inputs/StudyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StudyUpdateOneRequiredWithoutSeriesInput {
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

  @TypeGraphQL.Field(_type => StudyUpdateWithoutSeriesDataInput, {
    nullable: true,
    description: undefined
  })
  update?: StudyUpdateWithoutSeriesDataInput | undefined;

  @TypeGraphQL.Field(_type => StudyUpsertWithoutSeriesInput, {
    nullable: true,
    description: undefined
  })
  upsert?: StudyUpsertWithoutSeriesInput | undefined;
}
