import * as TypeGraphQL from "type-graphql";
import { AggregateLung_rads_reportArgs } from "./args/AggregateLung_rads_reportArgs";
import { CreateLung_rads_reportArgs } from "./args/CreateLung_rads_reportArgs";
import { DeleteLung_rads_reportArgs } from "./args/DeleteLung_rads_reportArgs";
import { DeleteManyLung_rads_reportArgs } from "./args/DeleteManyLung_rads_reportArgs";
import { FindManyLung_rads_reportArgs } from "./args/FindManyLung_rads_reportArgs";
import { FindOneLung_rads_reportArgs } from "./args/FindOneLung_rads_reportArgs";
import { UpdateLung_rads_reportArgs } from "./args/UpdateLung_rads_reportArgs";
import { UpdateManyLung_rads_reportArgs } from "./args/UpdateManyLung_rads_reportArgs";
import { UpsertLung_rads_reportArgs } from "./args/UpsertLung_rads_reportArgs";
import { Lung_rads_report } from "../../../models/Lung_rads_report";
import { AggregateLung_rads_report } from "../../outputs/AggregateLung_rads_report";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Lung_rads_report)
export class Lung_rads_reportCrudResolver {
  @TypeGraphQL.Query(_returns => Lung_rads_report, {
    nullable: true,
    description: undefined
  })
  async lung_rads_report(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneLung_rads_reportArgs): Promise<Lung_rads_report | undefined> {
    return ctx.prisma.lung_rads_report.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Lung_rads_report], {
    nullable: false,
    description: undefined
  })
  async lung_rads_reports(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyLung_rads_reportArgs): Promise<Lung_rads_report[]> {
    return ctx.prisma.lung_rads_report.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Lung_rads_report, {
    nullable: false,
    description: undefined
  })
  async createLung_rads_report(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateLung_rads_reportArgs): Promise<Lung_rads_report> {
    return ctx.prisma.lung_rads_report.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Lung_rads_report, {
    nullable: true,
    description: undefined
  })
  async deleteLung_rads_report(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteLung_rads_reportArgs): Promise<Lung_rads_report | undefined> {
    return ctx.prisma.lung_rads_report.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Lung_rads_report, {
    nullable: true,
    description: undefined
  })
  async updateLung_rads_report(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateLung_rads_reportArgs): Promise<Lung_rads_report | undefined> {
    return ctx.prisma.lung_rads_report.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyLung_rads_report(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyLung_rads_reportArgs): Promise<BatchPayload> {
    return ctx.prisma.lung_rads_report.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyLung_rads_report(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyLung_rads_reportArgs): Promise<BatchPayload> {
    return ctx.prisma.lung_rads_report.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Lung_rads_report, {
    nullable: false,
    description: undefined
  })
  async upsertLung_rads_report(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertLung_rads_reportArgs): Promise<Lung_rads_report> {
    return ctx.prisma.lung_rads_report.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateLung_rads_report, {
    nullable: false,
    description: undefined
  })
  async aggregateLung_rads_report(@TypeGraphQL.Args() args: AggregateLung_rads_reportArgs): Promise<AggregateLung_rads_report> {
    return new AggregateLung_rads_report();
  }
}
