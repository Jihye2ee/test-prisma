import * as TypeGraphQL from "type-graphql";
import { FindManyGarbage_collectionArgs } from "./args/FindManyGarbage_collectionArgs";
import { Garbage_collection } from "../../../models/Garbage_collection";

@TypeGraphQL.Resolver(_of => Garbage_collection)
export class FindManyGarbage_collectionResolver {
  @TypeGraphQL.Query(_returns => [Garbage_collection], {
    nullable: false,
    description: undefined
  })
  async garbage_collections(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyGarbage_collectionArgs): Promise<Garbage_collection[]> {
    return ctx.prisma.garbage_collection.findMany(args);
  }
}
