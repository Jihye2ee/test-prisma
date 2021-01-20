import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Nodule_analysis_request_historyOrderByInput } from "../../../inputs/Nodule_analysis_request_historyOrderByInput";
import { Nodule_analysis_request_historyWhereInput } from "../../../inputs/Nodule_analysis_request_historyWhereInput";
import { Nodule_analysis_request_historyWhereUniqueInput } from "../../../inputs/Nodule_analysis_request_historyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateNodule_analysis_request_historyArgs {
  @TypeGraphQL.Field(_type => Nodule_analysis_request_historyWhereInput, { nullable: true })
  where?: Nodule_analysis_request_historyWhereInput | undefined;

  @TypeGraphQL.Field(_type => Nodule_analysis_request_historyOrderByInput, { nullable: true })
  orderBy?: Nodule_analysis_request_historyOrderByInput | undefined;

  @TypeGraphQL.Field(_type => Nodule_analysis_request_historyWhereUniqueInput, { nullable: true })
  cursor?: Nodule_analysis_request_historyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
