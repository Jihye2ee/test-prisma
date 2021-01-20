import * as TypeGraphQL from "type-graphql";
import { FindManyTask_storageArgs } from "./args/FindManyTask_storageArgs";
import { Task_storage } from "../../../models/Task_storage";

@TypeGraphQL.Resolver(_of => Task_storage)
export class FindManyTask_storageResolver {
  @TypeGraphQL.Query(_returns => [Task_storage], {
    nullable: false,
    description: undefined
  })
  async task_storages(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTask_storageArgs): Promise<Task_storage[]> {
    return ctx.prisma.task_storage.findMany(args);
  }
}
