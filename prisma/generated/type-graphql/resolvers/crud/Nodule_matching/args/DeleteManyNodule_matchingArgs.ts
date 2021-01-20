import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Nodule_matchingWhereInput } from "../../../inputs/Nodule_matchingWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyNodule_matchingArgs {
  @TypeGraphQL.Field(_type => Nodule_matchingWhereInput, { nullable: true })
  where?: Nodule_matchingWhereInput | undefined;
}
