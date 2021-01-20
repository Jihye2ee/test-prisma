import * as TypeGraphQL from "type-graphql";
import { UpsertTask_storageArgs } from "./args/UpsertTask_storageArgs";
import { Task_storage } from "../../../models/Task_storage";

@TypeGraphQL.Resolver(_of => Task_storage)
export class UpsertTask_storageResolver {
  @TypeGraphQL.Mutation(_returns => Task_storage, {
    nullable: false,
    description: undefined
  })
  async upsertTask_storage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertTask_storageArgs): Promise<Task_storage> {
    return ctx.prisma.task_storage.upsert(args);
  }
}
