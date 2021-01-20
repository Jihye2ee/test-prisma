import * as TypeGraphQL from "type-graphql";
import { CreateTask_storageArgs } from "./args/CreateTask_storageArgs";
import { Task_storage } from "../../../models/Task_storage";

@TypeGraphQL.Resolver(_of => Task_storage)
export class CreateTask_storageResolver {
  @TypeGraphQL.Mutation(_returns => Task_storage, {
    nullable: false,
    description: undefined
  })
  async createTask_storage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateTask_storageArgs): Promise<Task_storage> {
    return ctx.prisma.task_storage.create(args);
  }
}
