import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { User_management_historyUpdateInput } from "../../../inputs/User_management_historyUpdateInput";
import { User_management_historyWhereUniqueInput } from "../../../inputs/User_management_historyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateUser_management_historyArgs {
  @TypeGraphQL.Field(_type => User_management_historyUpdateInput, { nullable: false })
  data!: User_management_historyUpdateInput;

  @TypeGraphQL.Field(_type => User_management_historyWhereUniqueInput, { nullable: false })
  where!: User_management_historyWhereUniqueInput;
}
