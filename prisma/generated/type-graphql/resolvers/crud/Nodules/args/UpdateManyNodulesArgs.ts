import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { NodulesUpdateManyMutationInput } from "../../../inputs/NodulesUpdateManyMutationInput";
import { NodulesWhereInput } from "../../../inputs/NodulesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyNodulesArgs {
  @TypeGraphQL.Field(_type => NodulesUpdateManyMutationInput, { nullable: false })
  data!: NodulesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => NodulesWhereInput, { nullable: true })
  where?: NodulesWhereInput | undefined;
}
