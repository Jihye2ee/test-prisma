import * as TypeGraphQL from "type-graphql";
import { UpdateGarbage_collectionArgs } from "./args/UpdateGarbage_collectionArgs";
import { Garbage_collection } from "../../../models/Garbage_collection";

@TypeGraphQL.Resolver(_of => Garbage_collection)
export class UpdateGarbage_collectionResolver {
  @TypeGraphQL.Mutation(_returns => Garbage_collection, {
    nullable: true,
    description: undefined
  })
  async updateGarbage_collection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateGarbage_collectionArgs): Promise<Garbage_collection | undefined> {
    return ctx.prisma.garbage_collection.update(args);
  }
}
