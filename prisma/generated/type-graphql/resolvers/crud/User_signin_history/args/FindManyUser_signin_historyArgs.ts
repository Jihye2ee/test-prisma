import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { User_signin_historyOrderByInput } from "../../../inputs/User_signin_historyOrderByInput";
import { User_signin_historyWhereInput } from "../../../inputs/User_signin_historyWhereInput";
import { User_signin_historyWhereUniqueInput } from "../../../inputs/User_signin_historyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyUser_signin_historyArgs {
  @TypeGraphQL.Field(_type => User_signin_historyWhereInput, { nullable: true })
  where?: User_signin_historyWhereInput | undefined;

  @TypeGraphQL.Field(_type => User_signin_historyOrderByInput, { nullable: true })
  orderBy?: User_signin_historyOrderByInput | undefined;

  @TypeGraphQL.Field(_type => User_signin_historyWhereUniqueInput, { nullable: true })
  cursor?: User_signin_historyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
