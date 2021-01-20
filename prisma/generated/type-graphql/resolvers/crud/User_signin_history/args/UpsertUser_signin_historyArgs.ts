import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { User_signin_historyCreateInput } from "../../../inputs/User_signin_historyCreateInput";
import { User_signin_historyUpdateInput } from "../../../inputs/User_signin_historyUpdateInput";
import { User_signin_historyWhereUniqueInput } from "../../../inputs/User_signin_historyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertUser_signin_historyArgs {
  @TypeGraphQL.Field(_type => User_signin_historyWhereUniqueInput, { nullable: false })
  where!: User_signin_historyWhereUniqueInput;

  @TypeGraphQL.Field(_type => User_signin_historyCreateInput, { nullable: false })
  create!: User_signin_historyCreateInput;

  @TypeGraphQL.Field(_type => User_signin_historyUpdateInput, { nullable: false })
  update!: User_signin_historyUpdateInput;
}
