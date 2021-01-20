import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Garbage_collectionCreateInput } from "../../../inputs/Garbage_collectionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateGarbage_collectionArgs {
  @TypeGraphQL.Field(_type => Garbage_collectionCreateInput, { nullable: false })
  data!: Garbage_collectionCreateInput;
}
