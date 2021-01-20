import * as TypeGraphQL from "type-graphql";
import { DeleteGarbage_collectionArgs } from "./args/DeleteGarbage_collectionArgs";
import { Garbage_collection } from "../../../models/Garbage_collection";

@TypeGraphQL.Resolver(_of => Garbage_collection)
export class DeleteGarbage_collectionResolver {
  @TypeGraphQL.Mutation(_returns => Garbage_collection, {
    nullable: true,
    description: undefined
  })
  async deleteGarbage_collection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteGarbage_collectionArgs): Promise<Garbage_collection | undefined> {
    return ctx.prisma.garbage_collection.delete(args);
  }
}
