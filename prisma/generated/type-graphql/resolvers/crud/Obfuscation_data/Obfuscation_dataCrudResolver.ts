import * as TypeGraphQL from "type-graphql";
import { AggregateObfuscation_dataArgs } from "./args/AggregateObfuscation_dataArgs";
import { CreateObfuscation_dataArgs } from "./args/CreateObfuscation_dataArgs";
import { DeleteManyObfuscation_dataArgs } from "./args/DeleteManyObfuscation_dataArgs";
import { DeleteObfuscation_dataArgs } from "./args/DeleteObfuscation_dataArgs";
import { FindManyObfuscation_dataArgs } from "./args/FindManyObfuscation_dataArgs";
import { FindOneObfuscation_dataArgs } from "./args/FindOneObfuscation_dataArgs";
import { UpdateManyObfuscation_dataArgs } from "./args/UpdateManyObfuscation_dataArgs";
import { UpdateObfuscation_dataArgs } from "./args/UpdateObfuscation_dataArgs";
import { UpsertObfuscation_dataArgs } from "./args/UpsertObfuscation_dataArgs";
import { Obfuscation_data } from "../../../models/Obfuscation_data";
import { AggregateObfuscation_data } from "../../outputs/AggregateObfuscation_data";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Obfuscation_data)
export class Obfuscation_dataCrudResolver {
  @TypeGraphQL.Query(_returns => Obfuscation_data, {
    nullable: true,
    description: undefined
  })
  async findOneObfuscation_data(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneObfuscation_dataArgs): Promise<Obfuscation_data | undefined> {
    return ctx.prisma.obfuscation_data.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Obfuscation_data], {
    nullable: false,
    description: undefined
  })
  async findManyObfuscation_data(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyObfuscation_dataArgs): Promise<Obfuscation_data[]> {
    return ctx.prisma.obfuscation_data.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Obfuscation_data, {
    nullable: false,
    description: undefined
  })
  async createObfuscation_data(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateObfuscation_dataArgs): Promise<Obfuscation_data> {
    return ctx.prisma.obfuscation_data.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Obfuscation_data, {
    nullable: true,
    description: undefined
  })
  async deleteObfuscation_data(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteObfuscation_dataArgs): Promise<Obfuscation_data | undefined> {
    return ctx.prisma.obfuscation_data.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Obfuscation_data, {
    nullable: true,
    description: undefined
  })
  async updateObfuscation_data(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateObfuscation_dataArgs): Promise<Obfuscation_data | undefined> {
    return ctx.prisma.obfuscation_data.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyObfuscation_data(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyObfuscation_dataArgs): Promise<BatchPayload> {
    return ctx.prisma.obfuscation_data.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyObfuscation_data(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyObfuscation_dataArgs): Promise<BatchPayload> {
    return ctx.prisma.obfuscation_data.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Obfuscation_data, {
    nullable: false,
    description: undefined
  })
  async upsertObfuscation_data(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertObfuscation_dataArgs): Promise<Obfuscation_data> {
    return ctx.prisma.obfuscation_data.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateObfuscation_data, {
    nullable: false,
    description: undefined
  })
  async aggregateObfuscation_data(@TypeGraphQL.Args() args: AggregateObfuscation_dataArgs): Promise<AggregateObfuscation_data> {
    return new AggregateObfuscation_data();
  }
}
