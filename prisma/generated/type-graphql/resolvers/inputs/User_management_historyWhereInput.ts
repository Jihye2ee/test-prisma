import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { user_management_history_typeFilter } from "../inputs/user_management_history_typeFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class User_management_historyWhereInput {
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

  @TypeGraphQL.Field(_type => user_management_history_typeFilter, {
    nullable: true,
    description: undefined
  })
  type?: user_management_history_typeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  timestamp?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => [User_management_historyWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: User_management_historyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [User_management_historyWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: User_management_historyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [User_management_historyWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: User_management_historyWhereInput[] | undefined;
}
