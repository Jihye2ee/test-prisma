import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { IntFilter } from "../inputs/IntFilter";
import { NodulesFilter } from "../inputs/NodulesFilter";
import { NullableIntFilter } from "../inputs/NullableIntFilter";
import { NullableStringFilter } from "../inputs/NullableStringFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class Nodule_analysis_request_historyWhereInput {
  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  seq?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  nodule_analysis_request_uuid?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  series_uuid_defined_in_internal_pacs?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  result_json_data?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => NullableIntFilter, {
    nullable: true,
    description: undefined
  })
  nodule_count?: NullableIntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  creation_timestamp?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => NullableIntFilter, {
    nullable: true,
    description: undefined
  })
  nodule_analysis_result_receive_timestamp?: NullableIntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  request_user_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  analysis_version?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => NodulesFilter, {
    nullable: true,
    description: undefined
  })
  nodules?: NodulesFilter | undefined;

  @TypeGraphQL.Field(_type => [Nodule_analysis_request_historyWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: Nodule_analysis_request_historyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Nodule_analysis_request_historyWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: Nodule_analysis_request_historyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Nodule_analysis_request_historyWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: Nodule_analysis_request_historyWhereInput[] | undefined;
}
