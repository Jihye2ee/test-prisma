import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { User_signin_historyUpdateWithoutUserDataInput } from "../inputs/User_signin_historyUpdateWithoutUserDataInput";
import { User_signin_historyWhereUniqueInput } from "../inputs/User_signin_historyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class User_signin_historyUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => User_signin_historyWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: User_signin_historyWhereUniqueInput;

  @TypeGraphQL.Field(_type => User_signin_historyUpdateWithoutUserDataInput, {
    nullable: false,
    description: undefined
  })
  data!: User_signin_historyUpdateWithoutUserDataInput;
}
