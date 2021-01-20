import * as TypeGraphQL from "type-graphql";
import { DeleteManyTask_storageArgs } from "./args/DeleteManyTask_storageArgs";
import { Task_storage } from "../../../models/Task_storage";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Task_storage)
export class DeleteManyTask_storageResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyTask_storage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyTask_storageArgs): Promise<BatchPayload> {
    return ctx.prisma.task_storage.deleteMany(args);
  }
}
