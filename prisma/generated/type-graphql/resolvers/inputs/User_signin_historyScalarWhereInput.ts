import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { IntFilter } from "../inputs/IntFilter";
import { NullableStringFilter } from "../inputs/NullableStringFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class User_signin_historyScalarWhereInput {
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
  session_key?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  session_uuid?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  sign_in_timestamp?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  sign_out_timestamp?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  heart_beat_timestamp?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  ip?: NullableStringFilter | undefined;

  @TypeGraphQL.Field(_type => [User_signin_historyScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: User_signin_historyScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [User_signin_historyScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: User_signin_historyScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [User_signin_historyScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: User_signin_historyScalarWhereInput[] | undefined;
}
