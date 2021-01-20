import * as TypeGraphQL from "type-graphql";
import { DeleteTask_storageArgs } from "./args/DeleteTask_storageArgs";
import { Task_storage } from "../../../models/Task_storage";

@TypeGraphQL.Resolver(_of => Task_storage)
export class DeleteTask_storageResolver {
  @TypeGraphQL.Mutation(_returns => Task_storage, {
    nullable: true,
    description: undefined
  })
  async deleteTask_storage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteTask_storageArgs): Promise<Task_storage | undefined> {
    return ctx.prisma.task_storage.delete(args);
  }
}
