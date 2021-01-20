import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Nodule_matchingUpdateInput } from "../../../inputs/Nodule_matchingUpdateInput";
import { Nodule_matchingWhereUniqueInput } from "../../../inputs/Nodule_matchingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateNodule_matchingArgs {
  @TypeGraphQL.Field(_type => Nodule_matchingUpdateInput, { nullable: false })
  data!: Nodule_matchingUpdateInput;

  @TypeGraphQL.Field(_type => Nodule_matchingWhereUniqueInput, { nullable: false })
  where!: Nodule_matchingWhereUniqueInput;
}
