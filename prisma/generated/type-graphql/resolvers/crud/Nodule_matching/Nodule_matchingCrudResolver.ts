import * as TypeGraphQL from "type-graphql";
import { AggregateNodule_matchingArgs } from "./args/AggregateNodule_matchingArgs";
import { CreateNodule_matchingArgs } from "./args/CreateNodule_matchingArgs";
import { DeleteManyNodule_matchingArgs } from "./args/DeleteManyNodule_matchingArgs";
import { DeleteNodule_matchingArgs } from "./args/DeleteNodule_matchingArgs";
import { FindManyNodule_matchingArgs } from "./args/FindManyNodule_matchingArgs";
import { FindOneNodule_matchingArgs } from "./args/FindOneNodule_matchingArgs";
import { UpdateManyNodule_matchingArgs } from "./args/UpdateManyNodule_matchingArgs";
import { UpdateNodule_matchingArgs } from "./args/UpdateNodule_matchingArgs";
import { UpsertNodule_matchingArgs } from "./args/UpsertNodule_matchingArgs";
import { Nodule_matching } from "../../../models/Nodule_matching";
import { AggregateNodule_matching } from "../../outputs/AggregateNodule_matching";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Nodule_matching)
export class Nodule_matchingCrudResolver {
  @TypeGraphQL.Query(_returns => Nodule_matching, {
    nullable: true,
    description: undefined
  })
  async nodule_matching(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneNodule_matchingArgs): Promise<Nodule_matching | undefined> {
    return ctx.prisma.nodule_matching.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Nodule_matching], {
    nullable: false,
    description: undefined
  })
  async nodule_matchings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyNodule_matchingArgs): Promise<Nodule_matching[]> {
    return ctx.prisma.nodule_matching.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Nodule_matching, {
    nullable: false,
    description: undefined
  })
  async createNodule_matching(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateNodule_matchingArgs): Promise<Nodule_matching> {
    return ctx.prisma.nodule_matching.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Nodule_matching, {
    nullable: true,
    description: undefined
  })
  async deleteNodule_matching(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteNodule_matchingArgs): Promise<Nodule_matching | undefined> {
    return ctx.prisma.nodule_matching.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Nodule_matching, {
    nullable: true,
    description: undefined
  })
  async updateNodule_matching(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateNodule_matchingArgs): Promise<Nodule_matching | undefined> {
    return ctx.prisma.nodule_matching.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyNodule_matching(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyNodule_matchingArgs): Promise<BatchPayload> {
    return ctx.prisma.nodule_matching.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyNodule_matching(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyNodule_matchingArgs): Promise<BatchPayload> {
    return ctx.prisma.nodule_matching.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Nodule_matching, {
    nullable: false,
    description: undefined
  })
  async upsertNodule_matching(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertNodule_matchingArgs): Promise<Nodule_matching> {
    return ctx.prisma.nodule_matching.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateNodule_matching, {
    nullable: false,
    description: undefined
  })
  async aggregateNodule_matching(@TypeGraphQL.Args() args: AggregateNodule_matchingArgs): Promise<AggregateNodule_matching> {
    return new AggregateNodule_matching();
  }
}
