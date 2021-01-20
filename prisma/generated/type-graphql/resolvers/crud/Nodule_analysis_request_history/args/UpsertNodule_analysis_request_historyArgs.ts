import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Nodule_analysis_request_historyCreateInput } from "../../../inputs/Nodule_analysis_request_historyCreateInput";
import { Nodule_analysis_request_historyUpdateInput } from "../../../inputs/Nodule_analysis_request_historyUpdateInput";
import { Nodule_analysis_request_historyWhereUniqueInput } from "../../../inputs/Nodule_analysis_request_historyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertNodule_analysis_request_historyArgs {
  @TypeGraphQL.Field(_type => Nodule_analysis_request_historyWhereUniqueInput, { nullable: false })
  where!: Nodule_analysis_request_historyWhereUniqueInput;

  @TypeGraphQL.Field(_type => Nodule_analysis_request_historyCreateInput, { nullable: false })
  create!: Nodule_analysis_request_historyCreateInput;

  @TypeGraphQL.Field(_type => Nodule_analysis_request_historyUpdateInput, { nullable: false })
  update!: Nodule_analysis_request_historyUpdateInput;
}
