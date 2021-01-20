import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Nodule_matchingCreateInput } from "../../../inputs/Nodule_matchingCreateInput";

@TypeGraphQL.ArgsType()
export class CreateNodule_matchingArgs {
  @TypeGraphQL.Field(_type => Nodule_matchingCreateInput, { nullable: false })
  data!: Nodule_matchingCreateInput;
}
