import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { User_management_historyCreateInput } from "../../../inputs/User_management_historyCreateInput";

@TypeGraphQL.ArgsType()
export class CreateUser_management_historyArgs {
  @TypeGraphQL.Field(_type => User_management_historyCreateInput, { nullable: false })
  data!: User_management_historyCreateInput;
}
