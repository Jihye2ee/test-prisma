import * as TypeGraphQL from "type-graphql";
import { UpdateManyTask_storageArgs } from "./args/UpdateManyTask_storageArgs";
import { Task_storage } from "../../../models/Task_storage";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Task_storage)
export class UpdateManyTask_storageResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyTask_storage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyTask_storageArgs): Promise<BatchPayload> {
    return ctx.prisma.task_storage.updateMany(args);
  }
}
