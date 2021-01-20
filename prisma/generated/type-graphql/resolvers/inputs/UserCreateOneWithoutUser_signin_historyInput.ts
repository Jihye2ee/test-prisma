import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { UserCreateWithoutUser_signin_historyInput } from "../inputs/UserCreateWithoutUser_signin_historyInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserCreateOneWithoutUser_signin_historyInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutUser_signin_historyInput, {
    nullable: true,
    description: undefined
  })
  create?: UserCreateWithoutUser_signin_historyInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: UserWhereUniqueInput | undefined;
}
