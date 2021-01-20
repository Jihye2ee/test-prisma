import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { User_signin_historyUpdateManyMutationInput } from "../../../inputs/User_signin_historyUpdateManyMutationInput";
import { User_signin_historyWhereInput } from "../../../inputs/User_signin_historyWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUser_signin_historyArgs {
  @TypeGraphQL.Field(_type => User_signin_historyUpdateManyMutationInput, { nullable: false })
  data!: User_signin_historyUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => User_signin_historyWhereInput, { nullable: true })
  where?: User_signin_historyWhereInput | undefined;
}
