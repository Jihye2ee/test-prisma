import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { User_study_open_historyCreateInput } from "../../../inputs/User_study_open_historyCreateInput";

@TypeGraphQL.ArgsType()
export class CreateUser_study_open_historyArgs {
  @TypeGraphQL.Field(_type => User_study_open_historyCreateInput, { nullable: false })
  data!: User_study_open_historyCreateInput;
}
