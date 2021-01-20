import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { UserCreateWithoutUser_signin_historyInput } from "../inputs/UserCreateWithoutUser_signin_historyInput";
import { UserUpdateWithoutUser_signin_historyDataInput } from "../inputs/UserUpdateWithoutUser_signin_historyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpsertWithoutUser_signin_historyInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutUser_signin_historyDataInput, {
    nullable: false,
    description: undefined
  })
  update!: UserUpdateWithoutUser_signin_historyDataInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutUser_signin_historyInput, {
    nullable: false,
    description: undefined
  })
  create!: UserCreateWithoutUser_signin_historyInput;
}
