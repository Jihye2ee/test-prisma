import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { user_permission } from "../../enums/user_permission";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class user_permissionFilter {
  @TypeGraphQL.Field(_type => user_permission, {
    nullable: true,
    description: undefined
  })
  equals?: keyof typeof user_permission | undefined;

  @TypeGraphQL.Field(_type => user_permission, {
    nullable: true,
    description: undefined
  })
  not?: keyof typeof user_permission | undefined;

  @TypeGraphQL.Field(_type => [user_permission], {
    nullable: true,
    description: undefined
  })
  in?: Array<keyof typeof user_permission> | undefined;

  @TypeGraphQL.Field(_type => [user_permission], {
    nullable: true,
    description: undefined
  })
  notIn?: Array<keyof typeof user_permission> | undefined;
}
