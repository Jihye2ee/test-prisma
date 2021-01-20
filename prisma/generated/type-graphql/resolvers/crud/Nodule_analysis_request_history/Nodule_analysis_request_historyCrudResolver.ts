import * as TypeGraphQL from "type-graphql";
import { AggregateNodule_analysis_request_historyArgs } from "./args/AggregateNodule_analysis_request_historyArgs";
import { CreateNodule_analysis_request_historyArgs } from "./args/CreateNodule_analysis_request_historyArgs";
import { DeleteManyNodule_analysis_request_historyArgs } from "./args/DeleteManyNodule_analysis_request_historyArgs";
import { DeleteNodule_analysis_request_historyArgs } from "./args/DeleteNodule_analysis_request_historyArgs";
import { FindManyNodule_analysis_request_historyArgs } from "./args/FindManyNodule_analysis_request_historyArgs";
import { FindOneNodule_analysis_request_historyArgs } from "./args/FindOneNodule_analysis_request_historyArgs";
import { UpdateManyNodule_analysis_request_historyArgs } from "./args/UpdateManyNodule_analysis_request_historyArgs";
import { UpdateNodule_analysis_request_historyArgs } from "./args/UpdateNodule_analysis_request_historyArgs";
import { UpsertNodule_analysis_request_historyArgs } from "./args/UpsertNodule_analysis_request_historyArgs";
import { Nodule_analysis_request_history } from "../../../models/Nodule_analysis_request_history";
import { AggregateNodule_analysis_request_history } from "../../outputs/AggregateNodule_analysis_request_history";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Nodule_analysis_request_history)
export class Nodule_analysis_request_historyCrudResolver {
  @TypeGraphQL.Query(_returns => Nodule_analysis_request_history, {
    nullable: true,
    description: undefined
  })
  async nodule_analysis_request_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneNodule_analysis_request_historyArgs): Promise<Nodule_analysis_request_history | undefined> {
    return ctx.prisma.nodule_analysis_request_history.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Nodule_analysis_request_history], {
    nullable: false,
    description: undefined
  })
  async nodule_analysis_request_histories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyNodule_analysis_request_historyArgs): Promise<Nodule_analysis_request_history[]> {
    return ctx.prisma.nodule_analysis_request_history.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Nodule_analysis_request_history, {
    nullable: false,
    description: undefined
  })
  async createNodule_analysis_request_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateNodule_analysis_request_historyArgs): Promise<Nodule_analysis_request_history> {
    return ctx.prisma.nodule_analysis_request_history.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Nodule_analysis_request_history, {
    nullable: true,
    description: undefined
  })
  async deleteNodule_analysis_request_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteNodule_analysis_request_historyArgs): Promise<Nodule_analysis_request_history | undefined> {
    return ctx.prisma.nodule_analysis_request_history.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Nodule_analysis_request_history, {
    nullable: true,
    description: undefined
  })
  async updateNodule_analysis_request_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateNodule_analysis_request_historyArgs): Promise<Nodule_analysis_request_history | undefined> {
    return ctx.prisma.nodule_analysis_request_history.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyNodule_analysis_request_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyNodule_analysis_request_historyArgs): Promise<BatchPayload> {
    return ctx.prisma.nodule_analysis_request_history.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyNodule_analysis_request_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyNodule_analysis_request_historyArgs): Promise<BatchPayload> {
    return ctx.prisma.nodule_analysis_request_history.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Nodule_analysis_request_history, {
    nullable: false,
    description: undefined
  })
  async upsertNodule_analysis_request_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertNodule_analysis_request_historyArgs): Promise<Nodule_analysis_request_history> {
    return ctx.prisma.nodule_analysis_request_history.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateNodule_analysis_request_history, {
    nullable: false,
    description: undefined
  })
  async aggregateNodule_analysis_request_history(@TypeGraphQL.Args() args: AggregateNodule_analysis_request_historyArgs): Promise<AggregateNodule_analysis_request_history> {
    return new AggregateNodule_analysis_request_history();
  }
}
