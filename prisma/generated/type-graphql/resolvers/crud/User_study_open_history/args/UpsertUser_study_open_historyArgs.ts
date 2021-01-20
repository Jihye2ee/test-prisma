import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { User_study_open_historyCreateInput } from "../../../inputs/User_study_open_historyCreateInput";
import { User_study_open_historyUpdateInput } from "../../../inputs/User_study_open_historyUpdateInput";
import { User_study_open_historyWhereUniqueInput } from "../../../inputs/User_study_open_historyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertUser_study_open_historyArgs {
  @TypeGraphQL.Field(_type => User_study_open_historyWhereUniqueInput, { nullable: false })
  where!: User_study_open_historyWhereUniqueInput;

  @TypeGraphQL.Field(_type => User_study_open_historyCreateInput, { nullable: false })
  create!: User_study_open_historyCreateInput;

  @TypeGraphQL.Field(_type => User_study_open_historyUpdateInput, { nullable: false })
  update!: User_study_open_historyUpdateInput;
}
