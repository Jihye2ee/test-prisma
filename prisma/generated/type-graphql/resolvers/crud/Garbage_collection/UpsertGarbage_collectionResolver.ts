import * as TypeGraphQL from "type-graphql";
import { UpsertGarbage_collectionArgs } from "./args/UpsertGarbage_collectionArgs";
import { Garbage_collection } from "../../../models/Garbage_collection";

@TypeGraphQL.Resolver(_of => Garbage_collection)
export class UpsertGarbage_collectionResolver {
  @TypeGraphQL.Mutation(_returns => Garbage_collection, {
    nullable: false,
    description: undefined
  })
  async upsertGarbage_collection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertGarbage_collectionArgs): Promise<Garbage_collection> {
    return ctx.prisma.garbage_collection.upsert(args);
  }
}
