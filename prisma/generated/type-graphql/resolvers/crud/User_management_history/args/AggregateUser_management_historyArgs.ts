import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { User_management_historyOrderByInput } from "../../../inputs/User_management_historyOrderByInput";
import { User_management_historyWhereInput } from "../../../inputs/User_management_historyWhereInput";
import { User_management_historyWhereUniqueInput } from "../../../inputs/User_management_historyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateUser_management_historyArgs {
  @TypeGraphQL.Field(_type => User_management_historyWhereInput, { nullable: true })
  where?: User_management_historyWhereInput | undefined;

  @TypeGraphQL.Field(_type => User_management_historyOrderByInput, { nullable: true })
  orderBy?: User_management_historyOrderByInput | undefined;

  @TypeGraphQL.Field(_type => User_management_historyWhereUniqueInput, { nullable: true })
  cursor?: User_management_historyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
