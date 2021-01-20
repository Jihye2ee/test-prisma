import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { User_signin_historyWhereUniqueInput } from "../../../inputs/User_signin_historyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteUser_signin_historyArgs {
  @TypeGraphQL.Field(_type => User_signin_historyWhereUniqueInput, { nullable: false })
  where!: User_signin_historyWhereUniqueInput;
}
