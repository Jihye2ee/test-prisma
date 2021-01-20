import * as TypeGraphQL from "type-graphql";
import { UpdateManyGarbage_collectionArgs } from "./args/UpdateManyGarbage_collectionArgs";
import { Garbage_collection } from "../../../models/Garbage_collection";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Garbage_collection)
export class UpdateManyGarbage_collectionResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyGarbage_collection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyGarbage_collectionArgs): Promise<BatchPayload> {
    return ctx.prisma.garbage_collection.updateMany(args);
  }
}
