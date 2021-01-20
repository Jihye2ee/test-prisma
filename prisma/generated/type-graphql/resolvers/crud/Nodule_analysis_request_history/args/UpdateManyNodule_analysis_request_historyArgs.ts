import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Nodule_analysis_request_historyUpdateManyMutationInput } from "../../../inputs/Nodule_analysis_request_historyUpdateManyMutationInput";
import { Nodule_analysis_request_historyWhereInput } from "../../../inputs/Nodule_analysis_request_historyWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyNodule_analysis_request_historyArgs {
  @TypeGraphQL.Field(_type => Nodule_analysis_request_historyUpdateManyMutationInput, { nullable: false })
  data!: Nodule_analysis_request_historyUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Nodule_analysis_request_historyWhereInput, { nullable: true })
  where?: Nodule_analysis_request_historyWhereInput | undefined;
}
