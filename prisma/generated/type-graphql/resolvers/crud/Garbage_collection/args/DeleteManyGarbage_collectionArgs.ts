import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Garbage_collectionWhereInput } from "../../../inputs/Garbage_collectionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyGarbage_collectionArgs {
  @TypeGraphQL.Field(_type => Garbage_collectionWhereInput, { nullable: true })
  where?: Garbage_collectionWhereInput | undefined;
}
