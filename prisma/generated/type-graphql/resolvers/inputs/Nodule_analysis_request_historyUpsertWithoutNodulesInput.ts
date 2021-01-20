import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { Nodule_analysis_request_historyCreateWithoutNodulesInput } from "../inputs/Nodule_analysis_request_historyCreateWithoutNodulesInput";
import { Nodule_analysis_request_historyUpdateWithoutNodulesDataInput } from "../inputs/Nodule_analysis_request_historyUpdateWithoutNodulesDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class Nodule_analysis_request_historyUpsertWithoutNodulesInput {
  @TypeGraphQL.Field(_type => Nodule_analysis_request_historyUpdateWithoutNodulesDataInput, {
    nullable: false,
    description: undefined
  })
  update!: Nodule_analysis_request_historyUpdateWithoutNodulesDataInput;

  @TypeGraphQL.Field(_type => Nodule_analysis_request_historyCreateWithoutNodulesInput, {
    nullable: false,
    description: undefined
  })
  create!: Nodule_analysis_request_historyCreateWithoutNodulesInput;
}
