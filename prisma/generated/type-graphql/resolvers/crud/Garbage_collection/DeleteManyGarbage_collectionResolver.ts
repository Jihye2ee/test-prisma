import * as TypeGraphQL from "type-graphql";
import { DeleteManyGarbage_collectionArgs } from "./args/DeleteManyGarbage_collectionArgs";
import { Garbage_collection } from "../../../models/Garbage_collection";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Garbage_collection)
export class DeleteManyGarbage_collectionResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyGarbage_collection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyGarbage_collectionArgs): Promise<BatchPayload> {
    return ctx.prisma.garbage_collection.deleteMany(args);
  }
}
