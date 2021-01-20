import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { User_study_open_historyWhereInput } from "../../../inputs/User_study_open_historyWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUser_study_open_historyArgs {
  @TypeGraphQL.Field(_type => User_study_open_historyWhereInput, { nullable: true })
  where?: User_study_open_historyWhereInput | undefined;
}
