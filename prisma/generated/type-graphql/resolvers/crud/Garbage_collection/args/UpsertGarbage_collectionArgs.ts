import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Garbage_collectionCreateInput } from "../../../inputs/Garbage_collectionCreateInput";
import { Garbage_collectionUpdateInput } from "../../../inputs/Garbage_collectionUpdateInput";
import { Garbage_collectionWhereUniqueInput } from "../../../inputs/Garbage_collectionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertGarbage_collectionArgs {
  @TypeGraphQL.Field(_type => Garbage_collectionWhereUniqueInput, { nullable: false })
  where!: Garbage_collectionWhereUniqueInput;

  @TypeGraphQL.Field(_type => Garbage_collectionCreateInput, { nullable: false })
  create!: Garbage_collectionCreateInput;

  @TypeGraphQL.Field(_type => Garbage_collectionUpdateInput, { nullable: false })
  update!: Garbage_collectionUpdateInput;
}
