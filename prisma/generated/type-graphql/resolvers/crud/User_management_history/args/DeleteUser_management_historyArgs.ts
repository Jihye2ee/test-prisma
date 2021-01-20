import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { User_management_historyWhereUniqueInput } from "../../../inputs/User_management_historyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteUser_management_historyArgs {
  @TypeGraphQL.Field(_type => User_management_historyWhereUniqueInput, { nullable: false })
  where!: User_management_historyWhereUniqueInput;
}
