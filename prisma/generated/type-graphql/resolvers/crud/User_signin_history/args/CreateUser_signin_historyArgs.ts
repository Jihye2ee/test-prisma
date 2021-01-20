import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { User_signin_historyCreateInput } from "../../../inputs/User_signin_historyCreateInput";

@TypeGraphQL.ArgsType()
export class CreateUser_signin_historyArgs {
  @TypeGraphQL.Field(_type => User_signin_historyCreateInput, { nullable: false })
  data!: User_signin_historyCreateInput;
}
