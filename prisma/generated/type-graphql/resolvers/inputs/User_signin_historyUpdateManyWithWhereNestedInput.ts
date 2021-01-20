import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { User_signin_historyScalarWhereInput } from "../inputs/User_signin_historyScalarWhereInput";
import { User_signin_historyUpdateManyDataInput } from "../inputs/User_signin_historyUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class User_signin_historyUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => User_signin_historyScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: User_signin_historyScalarWhereInput;

  @TypeGraphQL.Field(_type => User_signin_historyUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: User_signin_historyUpdateManyDataInput;
}
