import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StudyFilter } from "../inputs/StudyFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class Internal_pacs_instanceWhereInput {
  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  seq?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  internal_pacs_instance_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  creation_timestamp?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  update_timestamp?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  host?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  port?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StudyFilter, {
    nullable: true,
    description: undefined
  })
  study?: StudyFilter | undefined;

  @TypeGraphQL.Field(_type => [Internal_pacs_instanceWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: Internal_pacs_instanceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Internal_pacs_instanceWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: Internal_pacs_instanceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Internal_pacs_instanceWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: Internal_pacs_instanceWhereInput[] | undefined;
}
