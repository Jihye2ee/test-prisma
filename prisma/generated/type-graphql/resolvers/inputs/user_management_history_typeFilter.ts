import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { user_management_history_type } from "../../enums/user_management_history_type";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class user_management_history_typeFilter {
  @TypeGraphQL.Field(_type => user_management_history_type, {
    nullable: true,
    description: undefined
  })
  equals?: keyof typeof user_management_history_type | undefined;

  @TypeGraphQL.Field(_type => user_management_history_type, {
    nullable: true,
    description: undefined
  })
  not?: keyof typeof user_management_history_type | undefined;

  @TypeGraphQL.Field(_type => [user_management_history_type], {
    nullable: true,
    description: undefined
  })
  in?: Array<keyof typeof user_management_history_type> | undefined;

  @TypeGraphQL.Field(_type => [user_management_history_type], {
    nullable: true,
    description: undefined
  })
  notIn?: Array<keyof typeof user_management_history_type> | undefined;
}
