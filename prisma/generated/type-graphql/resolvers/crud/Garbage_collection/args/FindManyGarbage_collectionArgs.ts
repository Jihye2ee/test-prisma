import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Garbage_collectionOrderByInput } from "../../../inputs/Garbage_collectionOrderByInput";
import { Garbage_collectionWhereInput } from "../../../inputs/Garbage_collectionWhereInput";
import { Garbage_collectionWhereUniqueInput } from "../../../inputs/Garbage_collectionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyGarbage_collectionArgs {
  @TypeGraphQL.Field(_type => Garbage_collectionWhereInput, { nullable: true })
  where?: Garbage_collectionWhereInput | undefined;

  @TypeGraphQL.Field(_type => Garbage_collectionOrderByInput, { nullable: true })
  orderBy?: Garbage_collectionOrderByInput | undefined;

  @TypeGraphQL.Field(_type => Garbage_collectionWhereUniqueInput, { nullable: true })
  cursor?: Garbage_collectionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
