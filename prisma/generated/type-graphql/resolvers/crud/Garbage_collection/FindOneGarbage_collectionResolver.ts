import * as TypeGraphQL from "type-graphql";
import { FindOneGarbage_collectionArgs } from "./args/FindOneGarbage_collectionArgs";
import { Garbage_collection } from "../../../models/Garbage_collection";

@TypeGraphQL.Resolver(_of => Garbage_collection)
export class FindOneGarbage_collectionResolver {
  @TypeGraphQL.Query(_returns => Garbage_collection, {
    nullable: true,
    description: undefined
  })
  async garbage_collection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneGarbage_collectionArgs): Promise<Garbage_collection | undefined> {
    return ctx.prisma.garbage_collection.findOne(args);
  }
}
