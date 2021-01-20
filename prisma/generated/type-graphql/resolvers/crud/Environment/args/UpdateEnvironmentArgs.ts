import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EnvironmentUpdateInput } from "../../../inputs/EnvironmentUpdateInput";
import { EnvironmentWhereUniqueInput } from "../../../inputs/EnvironmentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateEnvironmentArgs {
  @TypeGraphQL.Field(_type => EnvironmentUpdateInput, { nullable: false })
  data!: EnvironmentUpdateInput;

  @TypeGraphQL.Field(_type => EnvironmentWhereUniqueInput, { nullable: false })
  where!: EnvironmentWhereUniqueInput;
}
