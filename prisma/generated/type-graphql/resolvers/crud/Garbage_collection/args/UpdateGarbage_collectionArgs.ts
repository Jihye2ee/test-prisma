import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Garbage_collectionUpdateInput } from "../../../inputs/Garbage_collectionUpdateInput";
import { Garbage_collectionWhereUniqueInput } from "../../../inputs/Garbage_collectionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateGarbage_collectionArgs {
  @TypeGraphQL.Field(_type => Garbage_collectionUpdateInput, { nullable: false })
  data!: Garbage_collectionUpdateInput;

  @TypeGraphQL.Field(_type => Garbage_collectionWhereUniqueInput, { nullable: false })
  where!: Garbage_collectionWhereUniqueInput;
}
