import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EnvironmentUpdateManyMutationInput } from "../../../inputs/EnvironmentUpdateManyMutationInput";
import { EnvironmentWhereInput } from "../../../inputs/EnvironmentWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEnvironmentArgs {
  @TypeGraphQL.Field(_type => EnvironmentUpdateManyMutationInput, { nullable: false })
  data!: EnvironmentUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EnvironmentWhereInput, { nullable: true })
  where?: EnvironmentWhereInput | undefined;
}
