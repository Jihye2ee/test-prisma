import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { SeriesCreateWithoutStudyInput } from "../inputs/SeriesCreateWithoutStudyInput";
import { SeriesScalarWhereInput } from "../inputs/SeriesScalarWhereInput";
import { SeriesUpdateManyWithWhereNestedInput } from "../inputs/SeriesUpdateManyWithWhereNestedInput";
import { SeriesUpdateWithWhereUniqueWithoutStudyInput } from "../inputs/SeriesUpdateWithWhereUniqueWithoutStudyInput";
import { SeriesUpsertWithWhereUniqueWithoutStudyInput } from "../inputs/SeriesUpsertWithWhereUniqueWithoutStudyInput";
import { SeriesWhereUniqueInput } from "../inputs/SeriesWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SeriesUpdateManyWithoutStudyInput {
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

  @TypeGraphQL.Field(_type => [SeriesWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: SeriesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SeriesWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: SeriesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SeriesWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: SeriesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SeriesUpdateWithWhereUniqueWithoutStudyInput], {
    nullable: true,
    description: undefined
  })
  update?: SeriesUpdateWithWhereUniqueWithoutStudyInput[] | undefined;

  @TypeGraphQL.Field(_type => [SeriesUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: SeriesUpdateManyWithWhereNestedInput[] | undefined;

  @TypeGraphQL.Field(_type => [SeriesScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: SeriesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SeriesUpsertWithWhereUniqueWithoutStudyInput], {
    nullable: true,
    description: undefined
  })
  upsert?: SeriesUpsertWithWhereUniqueWithoutStudyInput[] | undefined;
}
