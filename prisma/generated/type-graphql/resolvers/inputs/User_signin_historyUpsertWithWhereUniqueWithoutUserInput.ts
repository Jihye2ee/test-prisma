import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { User_signin_historyCreateWithoutUserInput } from "../inputs/User_signin_historyCreateWithoutUserInput";
import { User_signin_historyUpdateWithoutUserDataInput } from "../inputs/User_signin_historyUpdateWithoutUserDataInput";
import { User_signin_historyWhereUniqueInput } from "../inputs/User_signin_historyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class User_signin_historyUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => User_signin_historyWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: User_signin_historyWhereUniqueInput;

  @TypeGraphQL.Field(_type => User_signin_historyUpdateWithoutUserDataInput, {
    nullable: false,
    description: undefined
  })
  update!: User_signin_historyUpdateWithoutUserDataInput;

  @TypeGraphQL.Field(_type => User_signin_historyCreateWithoutUserInput, {
    nullable: false,
    description: undefined
  })
  create!: User_signin_historyCreateWithoutUserInput;
}
