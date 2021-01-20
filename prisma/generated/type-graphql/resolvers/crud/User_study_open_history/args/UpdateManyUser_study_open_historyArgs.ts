import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { User_study_open_historyUpdateManyMutationInput } from "../../../inputs/User_study_open_historyUpdateManyMutationInput";
import { User_study_open_historyWhereInput } from "../../../inputs/User_study_open_historyWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUser_study_open_historyArgs {
  @TypeGraphQL.Field(_type => User_study_open_historyUpdateManyMutationInput, { nullable: false })
  data!: User_study_open_historyUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => User_study_open_historyWhereInput, { nullable: true })
  where?: User_study_open_historyWhereInput | undefined;
}
