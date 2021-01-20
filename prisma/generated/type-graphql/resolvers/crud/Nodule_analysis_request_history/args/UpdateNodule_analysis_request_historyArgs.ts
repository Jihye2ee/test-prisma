import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Nodule_analysis_request_historyUpdateInput } from "../../../inputs/Nodule_analysis_request_historyUpdateInput";
import { Nodule_analysis_request_historyWhereUniqueInput } from "../../../inputs/Nodule_analysis_request_historyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateNodule_analysis_request_historyArgs {
  @TypeGraphQL.Field(_type => Nodule_analysis_request_historyUpdateInput, { nullable: false })
  data!: Nodule_analysis_request_historyUpdateInput;

  @TypeGraphQL.Field(_type => Nodule_analysis_request_historyWhereUniqueInput, { nullable: false })
  where!: Nodule_analysis_request_historyWhereUniqueInput;
}
