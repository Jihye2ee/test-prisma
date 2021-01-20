import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { user_management_history_type } from "../../enums/user_management_history_type";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class User_management_historyUpdateInput {
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

  @TypeGraphQL.Field(_type => user_management_history_type, {
    nullable: true,
    description: undefined
  })
  type?: keyof typeof user_management_history_type | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  timestamp?: number | undefined;
}
