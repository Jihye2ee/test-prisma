import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { User_study_open_historyOrderByInput } from "../../../inputs/User_study_open_historyOrderByInput";
import { User_study_open_historyWhereInput } from "../../../inputs/User_study_open_historyWhereInput";
import { User_study_open_historyWhereUniqueInput } from "../../../inputs/User_study_open_historyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyUser_study_open_historyArgs {
  @TypeGraphQL.Field(_type => User_study_open_historyWhereInput, { nullable: true })
  where?: User_study_open_historyWhereInput | undefined;

  @TypeGraphQL.Field(_type => User_study_open_historyOrderByInput, { nullable: true })
  orderBy?: User_study_open_historyOrderByInput | undefined;

  @TypeGraphQL.Field(_type => User_study_open_historyWhereUniqueInput, { nullable: true })
  cursor?: User_study_open_historyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
