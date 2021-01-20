import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Garbage_collectionUpdateManyMutationInput } from "../../../inputs/Garbage_collectionUpdateManyMutationInput";
import { Garbage_collectionWhereInput } from "../../../inputs/Garbage_collectionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyGarbage_collectionArgs {
  @TypeGraphQL.Field(_type => Garbage_collectionUpdateManyMutationInput, { nullable: false })
  data!: Garbage_collectionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Garbage_collectionWhereInput, { nullable: true })
  where?: Garbage_collectionWhereInput | undefined;
}
