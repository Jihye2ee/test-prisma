import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { Nodule_analysis_request_historyCreateWithoutNodulesInput } from "../inputs/Nodule_analysis_request_historyCreateWithoutNodulesInput";
import { Nodule_analysis_request_historyWhereUniqueInput } from "../inputs/Nodule_analysis_request_historyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class Nodule_analysis_request_historyCreateOneWithoutNodulesInput {
  @TypeGraphQL.Field(_type => Nodule_analysis_request_historyCreateWithoutNodulesInput, {
    nullable: true,
    description: undefined
  })
  create?: Nodule_analysis_request_historyCreateWithoutNodulesInput | undefined;

  @TypeGraphQL.Field(_type => Nodule_analysis_request_historyWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: Nodule_analysis_request_historyWhereUniqueInput | undefined;
}
