import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { User_management_historyUpdateManyMutationInput } from "../../../inputs/User_management_historyUpdateManyMutationInput";
import { User_management_historyWhereInput } from "../../../inputs/User_management_historyWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUser_management_historyArgs {
  @TypeGraphQL.Field(_type => User_management_historyUpdateManyMutationInput, { nullable: false })
  data!: User_management_historyUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => User_management_historyWhereInput, { nullable: true })
  where?: User_management_historyWhereInput | undefined;
}
