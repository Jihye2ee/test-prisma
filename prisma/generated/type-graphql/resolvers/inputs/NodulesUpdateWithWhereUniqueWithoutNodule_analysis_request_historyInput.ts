import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { NodulesUpdateWithoutNodule_analysis_request_historyDataInput } from "../inputs/NodulesUpdateWithoutNodule_analysis_request_historyDataInput";
import { NodulesWhereUniqueInput } from "../inputs/NodulesWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class NodulesUpdateWithWhereUniqueWithoutNodule_analysis_request_historyInput {
  @TypeGraphQL.Field(_type => NodulesWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: NodulesWhereUniqueInput;

  @TypeGraphQL.Field(_type => NodulesUpdateWithoutNodule_analysis_request_historyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: NodulesUpdateWithoutNodule_analysis_request_historyDataInput;
}
