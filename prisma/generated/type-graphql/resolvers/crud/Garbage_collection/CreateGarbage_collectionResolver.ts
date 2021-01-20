import * as TypeGraphQL from "type-graphql";
import { CreateGarbage_collectionArgs } from "./args/CreateGarbage_collectionArgs";
import { Garbage_collection } from "../../../models/Garbage_collection";

@TypeGraphQL.Resolver(_of => Garbage_collection)
export class CreateGarbage_collectionResolver {
  @TypeGraphQL.Mutation(_returns => Garbage_collection, {
    nullable: false,
    description: undefined
  })
  async createGarbage_collection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateGarbage_collectionArgs): Promise<Garbage_collection> {
    return ctx.prisma.garbage_collection.create(args);
  }
}
