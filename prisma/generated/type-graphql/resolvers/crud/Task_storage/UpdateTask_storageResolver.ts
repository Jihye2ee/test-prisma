import * as TypeGraphQL from "type-graphql";
import { UpdateTask_storageArgs } from "./args/UpdateTask_storageArgs";
import { Task_storage } from "../../../models/Task_storage";

@TypeGraphQL.Resolver(_of => Task_storage)
export class UpdateTask_storageResolver {
  @TypeGraphQL.Mutation(_returns => Task_storage, {
    nullable: true,
    description: undefined
  })
  async updateTask_storage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateTask_storageArgs): Promise<Task_storage | undefined> {
    return ctx.prisma.task_storage.update(args);
  }
}
