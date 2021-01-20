import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { User_signin_historyWhereInput } from "../inputs/User_signin_historyWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class User_signin_historyFilter {
  @TypeGraphQL.Field(_type => User_signin_historyWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: User_signin_historyWhereInput | undefined;

  @TypeGraphQL.Field(_type => User_signin_historyWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: User_signin_historyWhereInput | undefined;

  @TypeGraphQL.Field(_type => User_signin_historyWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: User_signin_historyWhereInput | undefined;
}
