import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { User_study_open_historyWhereUniqueInput } from "../../../inputs/User_study_open_historyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindOneUser_study_open_historyArgs {
  @TypeGraphQL.Field(_type => User_study_open_historyWhereUniqueInput, { nullable: false })
  where!: User_study_open_historyWhereUniqueInput;
}
