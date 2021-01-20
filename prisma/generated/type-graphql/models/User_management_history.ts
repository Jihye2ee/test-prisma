import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../node_modules/@prisma/client";
import { user_management_history_type } from "../enums/user_management_history_type";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class User_management_history {
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

  @TypeGraphQL.Field(_type => user_management_history_type, {
    nullable: false,
    description: undefined,
  })
  type!: keyof typeof user_management_history_type;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  timestamp!: number;
}
