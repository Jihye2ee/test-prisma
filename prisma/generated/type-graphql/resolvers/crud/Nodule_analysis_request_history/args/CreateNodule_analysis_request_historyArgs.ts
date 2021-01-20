import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Nodule_analysis_request_historyCreateInput } from "../../../inputs/Nodule_analysis_request_historyCreateInput";

@TypeGraphQL.ArgsType()
export class CreateNodule_analysis_request_historyArgs {
  @TypeGraphQL.Field(_type => Nodule_analysis_request_historyCreateInput, { nullable: false })
  data!: Nodule_analysis_request_historyCreateInput;
}
