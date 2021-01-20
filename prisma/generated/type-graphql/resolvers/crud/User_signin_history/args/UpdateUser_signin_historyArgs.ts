import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { User_signin_historyUpdateInput } from "../../../inputs/User_signin_historyUpdateInput";
import { User_signin_historyWhereUniqueInput } from "../../../inputs/User_signin_historyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateUser_signin_historyArgs {
  @TypeGraphQL.Field(_type => User_signin_historyUpdateInput, { nullable: false })
  data!: User_signin_historyUpdateInput;

  @TypeGraphQL.Field(_type => User_signin_historyWhereUniqueInput, { nullable: false })
  where!: User_signin_historyWhereUniqueInput;
}
