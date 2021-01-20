import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { UserUpdateOneRequiredWithoutUser_signin_historyInput } from "../inputs/UserUpdateOneRequiredWithoutUser_signin_historyInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class User_signin_historyUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  seq?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  session_key?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  session_uuid?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  sign_in_timestamp?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  sign_out_timestamp?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  heart_beat_timestamp?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  ip?: string | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutUser_signin_historyInput, {
    nullable: true,
    description: undefined
  })
  user?: UserUpdateOneRequiredWithoutUser_signin_historyInput | undefined;
}
