import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { User_signin_historyCreateManyWithoutUserInput } from "../inputs/User_signin_historyCreateManyWithoutUserInput";
import { user_permission } from "../../enums/user_permission";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  password!: string;

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

  @TypeGraphQL.Field(_type => User_signin_historyCreateManyWithoutUserInput, {
    nullable: true,
    description: undefined
  })
  user_signin_history?: User_signin_historyCreateManyWithoutUserInput | undefined;
}
