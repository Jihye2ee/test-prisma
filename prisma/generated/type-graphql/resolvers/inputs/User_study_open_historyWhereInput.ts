import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class User_study_open_historyWhereInput {
  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  seq?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  study_uuid_defined_in_internal_pacs?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  series_uuid_defined_in_internal_pacs?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  open_request_timestamp?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => [User_study_open_historyWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: User_study_open_historyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [User_study_open_historyWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: User_study_open_historyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [User_study_open_historyWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: User_study_open_historyWhereInput[] | undefined;
}
