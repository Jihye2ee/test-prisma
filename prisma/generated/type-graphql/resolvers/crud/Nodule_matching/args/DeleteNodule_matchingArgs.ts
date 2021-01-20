import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Nodule_matchingWhereUniqueInput } from "../../../inputs/Nodule_matchingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteNodule_matchingArgs {
  @TypeGraphQL.Field(_type => Nodule_matchingWhereUniqueInput, { nullable: false })
  where!: Nodule_matchingWhereUniqueInput;
}
