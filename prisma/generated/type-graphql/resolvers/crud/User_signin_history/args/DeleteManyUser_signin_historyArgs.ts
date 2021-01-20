import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { User_signin_historyWhereInput } from "../../../inputs/User_signin_historyWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUser_signin_historyArgs {
  @TypeGraphQL.Field(_type => User_signin_historyWhereInput, { nullable: true })
  where?: User_signin_historyWhereInput | undefined;
}
