import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Garbage_collectionWhereUniqueInput } from "../../../inputs/Garbage_collectionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindOneGarbage_collectionArgs {
  @TypeGraphQL.Field(_type => Garbage_collectionWhereUniqueInput, { nullable: false })
  where!: Garbage_collectionWhereUniqueInput;
}
