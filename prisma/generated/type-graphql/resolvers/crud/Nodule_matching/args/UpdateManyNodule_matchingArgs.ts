import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Nodule_matchingUpdateManyMutationInput } from "../../../inputs/Nodule_matchingUpdateManyMutationInput";
import { Nodule_matchingWhereInput } from "../../../inputs/Nodule_matchingWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyNodule_matchingArgs {
  @TypeGraphQL.Field(_type => Nodule_matchingUpdateManyMutationInput, { nullable: false })
  data!: Nodule_matchingUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Nodule_matchingWhereInput, { nullable: true })
  where?: Nodule_matchingWhereInput | undefined;
}
