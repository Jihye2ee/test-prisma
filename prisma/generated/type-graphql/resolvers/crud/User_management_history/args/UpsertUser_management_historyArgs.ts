import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { User_management_historyCreateInput } from "../../../inputs/User_management_historyCreateInput";
import { User_management_historyUpdateInput } from "../../../inputs/User_management_historyUpdateInput";
import { User_management_historyWhereUniqueInput } from "../../../inputs/User_management_historyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertUser_management_historyArgs {
  @TypeGraphQL.Field(_type => User_management_historyWhereUniqueInput, { nullable: false })
  where!: User_management_historyWhereUniqueInput;

  @TypeGraphQL.Field(_type => User_management_historyCreateInput, { nullable: false })
  create!: User_management_historyCreateInput;

  @TypeGraphQL.Field(_type => User_management_historyUpdateInput, { nullable: false })
  update!: User_management_historyUpdateInput;
}
