import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { User_signin_historyUpdateManyWithoutUserInput } from "../inputs/User_signin_historyUpdateManyWithoutUserInput";
import { user_permission } from "../../enums/user_permission";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  seq?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  password?: string | undefined;

  @TypeGraphQL.Field(_type => user_permission, {
    nullable: true,
    description: undefined
  })
  permission?: keyof typeof user_permission | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  creation_timestamp?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  update_timstamp?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  last_password_update_timstamp?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  invalid_password_count?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  preference?: string | undefined;

  @TypeGraphQL.Field(_type => User_signin_historyUpdateManyWithoutUserInput, {
    nullable: true,
    description: undefined
  })
  user_signin_history?: User_signin_historyUpdateManyWithoutUserInput | undefined;
}
