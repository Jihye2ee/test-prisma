import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Nodule_matchingCreateInput } from "../../../inputs/Nodule_matchingCreateInput";
import { Nodule_matchingUpdateInput } from "../../../inputs/Nodule_matchingUpdateInput";
import { Nodule_matchingWhereUniqueInput } from "../../../inputs/Nodule_matchingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertNodule_matchingArgs {
  @TypeGraphQL.Field(_type => Nodule_matchingWhereUniqueInput, { nullable: false })
  where!: Nodule_matchingWhereUniqueInput;

  @TypeGraphQL.Field(_type => Nodule_matchingCreateInput, { nullable: false })
  create!: Nodule_matchingCreateInput;

  @TypeGraphQL.Field(_type => Nodule_matchingUpdateInput, { nullable: false })
  update!: Nodule_matchingUpdateInput;
}
