import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EnvironmentOrderByInput } from "../../../inputs/EnvironmentOrderByInput";
import { EnvironmentWhereInput } from "../../../inputs/EnvironmentWhereInput";
import { EnvironmentWhereUniqueInput } from "../../../inputs/EnvironmentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateEnvironmentArgs {
  @TypeGraphQL.Field(_type => EnvironmentWhereInput, { nullable: true })
  where?: EnvironmentWhereInput | undefined;

  @TypeGraphQL.Field(_type => EnvironmentOrderByInput, { nullable: true })
  orderBy?: EnvironmentOrderByInput | undefined;

  @TypeGraphQL.Field(_type => EnvironmentWhereUniqueInput, { nullable: true })
  cursor?: EnvironmentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
