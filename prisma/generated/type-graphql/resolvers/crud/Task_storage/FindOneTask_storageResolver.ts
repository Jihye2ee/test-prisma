import * as TypeGraphQL from "type-graphql";
import { FindOneTask_storageArgs } from "./args/FindOneTask_storageArgs";
import { Task_storage } from "../../../models/Task_storage";

@TypeGraphQL.Resolver(_of => Task_storage)
export class FindOneTask_storageResolver {
  @TypeGraphQL.Query(_returns => Task_storage, {
    nullable: true,
    description: undefined
  })
  async task_storage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneTask_storageArgs): Promise<Task_storage | undefined> {
    return ctx.prisma.task_storage.findOne(args);
  }
}
