import * as TypeGraphQL from "type-graphql";
import { AggregateTask_storageArgs } from "./args/AggregateTask_storageArgs";
import { CreateTask_storageArgs } from "./args/CreateTask_storageArgs";
import { DeleteManyTask_storageArgs } from "./args/DeleteManyTask_storageArgs";
import { DeleteTask_storageArgs } from "./args/DeleteTask_storageArgs";
import { FindManyTask_storageArgs } from "./args/FindManyTask_storageArgs";
import { FindOneTask_storageArgs } from "./args/FindOneTask_storageArgs";
import { UpdateManyTask_storageArgs } from "./args/UpdateManyTask_storageArgs";
import { UpdateTask_storageArgs } from "./args/UpdateTask_storageArgs";
import { UpsertTask_storageArgs } from "./args/UpsertTask_storageArgs";
import { Task_storage } from "../../../models/Task_storage";
import { AggregateTask_storage } from "../../outputs/AggregateTask_storage";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Task_storage)
export class Task_storageCrudResolver {
  @TypeGraphQL.Query(_returns => Task_storage, {
    nullable: true,
    description: undefined
  })
  async task_storage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneTask_storageArgs): Promise<Task_storage | undefined> {
    return ctx.prisma.task_storage.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Task_storage], {
    nullable: false,
    description: undefined
  })
  async task_storages(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTask_storageArgs): Promise<Task_storage[]> {
    return ctx.prisma.task_storage.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Task_storage, {
    nullable: false,
    description: undefined
  })
  async createTask_storage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateTask_storageArgs): Promise<Task_storage> {
    return ctx.prisma.task_storage.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Task_storage, {
    nullable: true,
    description: undefined
  })
  async deleteTask_storage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteTask_storageArgs): Promise<Task_storage | undefined> {
    return ctx.prisma.task_storage.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Task_storage, {
    nullable: true,
    description: undefined
  })
  async updateTask_storage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateTask_storageArgs): Promise<Task_storage | undefined> {
    return ctx.prisma.task_storage.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyTask_storage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyTask_storageArgs): Promise<BatchPayload> {
    return ctx.prisma.task_storage.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyTask_storage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyTask_storageArgs): Promise<BatchPayload> {
    return ctx.prisma.task_storage.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Task_storage, {
    nullable: false,
    description: undefined
  })
  async upsertTask_storage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertTask_storageArgs): Promise<Task_storage> {
    return ctx.prisma.task_storage.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateTask_storage, {
    nullable: false,
    description: undefined
  })
  async aggregateTask_storage(@TypeGraphQL.Args() args: AggregateTask_storageArgs): Promise<AggregateTask_storage> {
    return new AggregateTask_storage();
  }
}
