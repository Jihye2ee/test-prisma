import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../node_modules/@prisma/client";
import { User_signin_history } from "../models/User_signin_history";
import { user_permission } from "../enums/user_permission";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class User {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  seq!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  password!: string;

  @TypeGraphQL.Field(_type => user_permission, {
    nullable: false,
    description: undefined,
  })
  permission!: keyof typeof user_permission;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  creation_timestamp!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  update_timstamp!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  last_password_update_timstamp!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  invalid_password_count!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  preference?: string | undefined;

  user_signin_history?: User_signin_history[] | undefined;
}
