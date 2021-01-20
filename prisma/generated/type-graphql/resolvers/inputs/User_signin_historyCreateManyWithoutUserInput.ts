import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { User_signin_historyCreateWithoutUserInput } from "../inputs/User_signin_historyCreateWithoutUserInput";
import { User_signin_historyWhereUniqueInput } from "../inputs/User_signin_historyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class User_signin_historyCreateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [User_signin_historyCreateWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  create?: User_signin_historyCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [User_signin_historyWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: User_signin_historyWhereUniqueInput[] | undefined;
}
