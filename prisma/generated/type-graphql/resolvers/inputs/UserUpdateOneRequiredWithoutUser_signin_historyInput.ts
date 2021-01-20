import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { UserCreateWithoutUser_signin_historyInput } from "../inputs/UserCreateWithoutUser_signin_historyInput";
import { UserUpdateWithoutUser_signin_historyDataInput } from "../inputs/UserUpdateWithoutUser_signin_historyDataInput";
import { UserUpsertWithoutUser_signin_historyInput } from "../inputs/UserUpsertWithoutUser_signin_historyInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpdateOneRequiredWithoutUser_signin_historyInput {
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

  @TypeGraphQL.Field(_type => UserUpdateWithoutUser_signin_historyDataInput, {
    nullable: true,
    description: undefined
  })
  update?: UserUpdateWithoutUser_signin_historyDataInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutUser_signin_historyInput, {
    nullable: true,
    description: undefined
  })
  upsert?: UserUpsertWithoutUser_signin_historyInput | undefined;
}
