import * as TypeGraphQL from "type-graphql";
import { AggregateSeriesArgs } from "./args/AggregateSeriesArgs";
import { CreateSeriesArgs } from "./args/CreateSeriesArgs";
import { DeleteManySeriesArgs } from "./args/DeleteManySeriesArgs";
import { DeleteSeriesArgs } from "./args/DeleteSeriesArgs";
import { FindManySeriesArgs } from "./args/FindManySeriesArgs";
import { FindOneSeriesArgs } from "./args/FindOneSeriesArgs";
import { UpdateManySeriesArgs } from "./args/UpdateManySeriesArgs";
import { UpdateSeriesArgs } from "./args/UpdateSeriesArgs";
import { UpsertSeriesArgs } from "./args/UpsertSeriesArgs";
import { Series } from "../../../models/Series";
import { AggregateSeries } from "../../outputs/AggregateSeries";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Series)
export class SeriesCrudResolver {
  @TypeGraphQL.Query(_returns => Series, {
    nullable: true,
    description: undefined
  })
  async findOneSeries(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneSeriesArgs): Promise<Series | undefined> {
    return ctx.prisma.series.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Series], {
    nullable: false,
    description: undefined
  })
  async findManySeries(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManySeriesArgs): Promise<Series[]> {
    return ctx.prisma.series.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Series, {
    nullable: false,
    description: undefined
  })
  async createSeries(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateSeriesArgs): Promise<Series> {
    return ctx.prisma.series.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Series, {
    nullable: true,
    description: undefined
  })
  async deleteSeries(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteSeriesArgs): Promise<Series | undefined> {
    return ctx.prisma.series.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Series, {
    nullable: true,
    description: undefined
  })
  async updateSeries(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateSeriesArgs): Promise<Series | undefined> {
    return ctx.prisma.series.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManySeries(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManySeriesArgs): Promise<BatchPayload> {
    return ctx.prisma.series.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManySeries(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManySeriesArgs): Promise<BatchPayload> {
    return ctx.prisma.series.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Series, {
    nullable: false,
    description: undefined
  })
  async upsertSeries(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertSeriesArgs): Promise<Series> {
    return ctx.prisma.series.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateSeries, {
    nullable: false,
    description: undefined
  })
  async aggregateSeries(@TypeGraphQL.Args() args: AggregateSeriesArgs): Promise<AggregateSeries> {
    return new AggregateSeries();
  }
}
