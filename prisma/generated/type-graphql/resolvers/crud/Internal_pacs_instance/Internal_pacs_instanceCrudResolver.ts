import * as TypeGraphQL from "type-graphql";
import { AggregateInternal_pacs_instanceArgs } from "./args/AggregateInternal_pacs_instanceArgs";
import { CreateInternal_pacs_instanceArgs } from "./args/CreateInternal_pacs_instanceArgs";
import { DeleteInternal_pacs_instanceArgs } from "./args/DeleteInternal_pacs_instanceArgs";
import { DeleteManyInternal_pacs_instanceArgs } from "./args/DeleteManyInternal_pacs_instanceArgs";
import { FindManyInternal_pacs_instanceArgs } from "./args/FindManyInternal_pacs_instanceArgs";
import { FindOneInternal_pacs_instanceArgs } from "./args/FindOneInternal_pacs_instanceArgs";
import { UpdateInternal_pacs_instanceArgs } from "./args/UpdateInternal_pacs_instanceArgs";
import { UpdateManyInternal_pacs_instanceArgs } from "./args/UpdateManyInternal_pacs_instanceArgs";
import { UpsertInternal_pacs_instanceArgs } from "./args/UpsertInternal_pacs_instanceArgs";
import { Internal_pacs_instance } from "../../../models/Internal_pacs_instance";
import { AggregateInternal_pacs_instance } from "../../outputs/AggregateInternal_pacs_instance";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Internal_pacs_instance)
export class Internal_pacs_instanceCrudResolver {
  @TypeGraphQL.Query(_returns => Internal_pacs_instance, {
    nullable: true,
    description: undefined
  })
  async internal_pacs_instance(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneInternal_pacs_instanceArgs): Promise<Internal_pacs_instance | undefined> {
    return ctx.prisma.internal_pacs_instance.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Internal_pacs_instance], {
    nullable: false,
    description: undefined
  })
  async internal_pacs_instances(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyInternal_pacs_instanceArgs): Promise<Internal_pacs_instance[]> {
    return ctx.prisma.internal_pacs_instance.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Internal_pacs_instance, {
    nullable: false,
    description: undefined
  })
  async createInternal_pacs_instance(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateInternal_pacs_instanceArgs): Promise<Internal_pacs_instance> {
    return ctx.prisma.internal_pacs_instance.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Internal_pacs_instance, {
    nullable: true,
    description: undefined
  })
  async deleteInternal_pacs_instance(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteInternal_pacs_instanceArgs): Promise<Internal_pacs_instance | undefined> {
    return ctx.prisma.internal_pacs_instance.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Internal_pacs_instance, {
    nullable: true,
    description: undefined
  })
  async updateInternal_pacs_instance(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateInternal_pacs_instanceArgs): Promise<Internal_pacs_instance | undefined> {
    return ctx.prisma.internal_pacs_instance.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyInternal_pacs_instance(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyInternal_pacs_instanceArgs): Promise<BatchPayload> {
    return ctx.prisma.internal_pacs_instance.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyInternal_pacs_instance(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyInternal_pacs_instanceArgs): Promise<BatchPayload> {
    return ctx.prisma.internal_pacs_instance.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Internal_pacs_instance, {
    nullable: false,
    description: undefined
  })
  async upsertInternal_pacs_instance(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertInternal_pacs_instanceArgs): Promise<Internal_pacs_instance> {
    return ctx.prisma.internal_pacs_instance.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateInternal_pacs_instance, {
    nullable: false,
    description: undefined
  })
  async aggregateInternal_pacs_instance(@TypeGraphQL.Args() args: AggregateInternal_pacs_instanceArgs): Promise<AggregateInternal_pacs_instance> {
    return new AggregateInternal_pacs_instance();
  }
}
