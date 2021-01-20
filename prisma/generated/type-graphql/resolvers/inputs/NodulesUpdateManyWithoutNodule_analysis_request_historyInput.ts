import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { NodulesCreateWithoutNodule_analysis_request_historyInput } from "../inputs/NodulesCreateWithoutNodule_analysis_request_historyInput";
import { NodulesScalarWhereInput } from "../inputs/NodulesScalarWhereInput";
import { NodulesUpdateManyWithWhereNestedInput } from "../inputs/NodulesUpdateManyWithWhereNestedInput";
import { NodulesUpdateWithWhereUniqueWithoutNodule_analysis_request_historyInput } from "../inputs/NodulesUpdateWithWhereUniqueWithoutNodule_analysis_request_historyInput";
import { NodulesUpsertWithWhereUniqueWithoutNodule_analysis_request_historyInput } from "../inputs/NodulesUpsertWithWhereUniqueWithoutNodule_analysis_request_historyInput";
import { NodulesWhereUniqueInput } from "../inputs/NodulesWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class NodulesUpdateManyWithoutNodule_analysis_request_historyInput {
  @TypeGraphQL.Field(_type => [NodulesCreateWithoutNodule_analysis_request_historyInput], {
    nullable: true,
    description: undefined
  })
  create?: NodulesCreateWithoutNodule_analysis_request_historyInput[] | undefined;

  @TypeGraphQL.Field(_type => [NodulesWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: NodulesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NodulesWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: NodulesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NodulesWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: NodulesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NodulesWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: NodulesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NodulesUpdateWithWhereUniqueWithoutNodule_analysis_request_historyInput], {
    nullable: true,
    description: undefined
  })
  update?: NodulesUpdateWithWhereUniqueWithoutNodule_analysis_request_historyInput[] | undefined;

  @TypeGraphQL.Field(_type => [NodulesUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: NodulesUpdateManyWithWhereNestedInput[] | undefined;

  @TypeGraphQL.Field(_type => [NodulesScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: NodulesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NodulesUpsertWithWhereUniqueWithoutNodule_analysis_request_historyInput], {
    nullable: true,
    description: undefined
  })
  upsert?: NodulesUpsertWithWhereUniqueWithoutNodule_analysis_request_historyInput[] | undefined;
}
