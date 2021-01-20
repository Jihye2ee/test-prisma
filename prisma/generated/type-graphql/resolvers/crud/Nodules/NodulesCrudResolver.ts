import * as TypeGraphQL from "type-graphql";
import { AggregateNodulesArgs } from "./args/AggregateNodulesArgs";
import { CreateNodulesArgs } from "./args/CreateNodulesArgs";
import { DeleteManyNodulesArgs } from "./args/DeleteManyNodulesArgs";
import { DeleteNodulesArgs } from "./args/DeleteNodulesArgs";
import { FindManyNodulesArgs } from "./args/FindManyNodulesArgs";
import { FindOneNodulesArgs } from "./args/FindOneNodulesArgs";
import { UpdateManyNodulesArgs } from "./args/UpdateManyNodulesArgs";
import { UpdateNodulesArgs } from "./args/UpdateNodulesArgs";
import { UpsertNodulesArgs } from "./args/UpsertNodulesArgs";
import { Nodules } from "../../../models/Nodules";
import { AggregateNodules } from "../../outputs/AggregateNodules";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Nodules)
export class NodulesCrudResolver {
  @TypeGraphQL.Query(_returns => Nodules, {
    nullable: true,
    description: undefined
  })
  async findOneNodules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneNodulesArgs): Promise<Nodules | undefined> {
    return ctx.prisma.nodules.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Nodules], {
    nullable: false,
    description: undefined
  })
  async findManyNodules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyNodulesArgs): Promise<Nodules[]> {
    return ctx.prisma.nodules.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Nodules, {
    nullable: false,
    description: undefined
  })
  async createNodules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateNodulesArgs): Promise<Nodules> {
    return ctx.prisma.nodules.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Nodules, {
    nullable: true,
    description: undefined
  })
  async deleteNodules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteNodulesArgs): Promise<Nodules | undefined> {
    return ctx.prisma.nodules.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Nodules, {
    nullable: true,
    description: undefined
  })
  async updateNodules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateNodulesArgs): Promise<Nodules | undefined> {
    return ctx.prisma.nodules.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyNodules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyNodulesArgs): Promise<BatchPayload> {
    return ctx.prisma.nodules.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyNodules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyNodulesArgs): Promise<BatchPayload> {
    return ctx.prisma.nodules.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Nodules, {
    nullable: false,
    description: undefined
  })
  async upsertNodules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertNodulesArgs): Promise<Nodules> {
    return ctx.prisma.nodules.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateNodules, {
    nullable: false,
    description: undefined
  })
  async aggregateNodules(@TypeGraphQL.Args() args: AggregateNodulesArgs): Promise<AggregateNodules> {
    return new AggregateNodules();
  }
}
