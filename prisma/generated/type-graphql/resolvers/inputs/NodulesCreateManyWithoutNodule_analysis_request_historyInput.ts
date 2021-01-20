import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { NodulesCreateWithoutNodule_analysis_request_historyInput } from "../inputs/NodulesCreateWithoutNodule_analysis_request_historyInput";
import { NodulesWhereUniqueInput } from "../inputs/NodulesWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class NodulesCreateManyWithoutNodule_analysis_request_historyInput {
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
}
