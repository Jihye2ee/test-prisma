import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { NodulesUpdateManyWithoutNodule_analysis_request_historyInput } from "../inputs/NodulesUpdateManyWithoutNodule_analysis_request_historyInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class Nodule_analysis_request_historyUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  seq?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  nodule_analysis_request_uuid?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  series_uuid_defined_in_internal_pacs?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  result_json_data?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  nodule_count?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  creation_timestamp?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  nodule_analysis_result_receive_timestamp?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  request_user_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  analysis_version?: string | undefined;

  @TypeGraphQL.Field(_type => NodulesUpdateManyWithoutNodule_analysis_request_historyInput, {
    nullable: true,
    description: undefined
  })
  nodules?: NodulesUpdateManyWithoutNodule_analysis_request_historyInput | undefined;
}
