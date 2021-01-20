import * as TypeGraphQL from "type-graphql";
import { AggregateStudy_duplicated_by_instance_uidArgs } from "./args/AggregateStudy_duplicated_by_instance_uidArgs";
import { CreateStudy_duplicated_by_instance_uidArgs } from "./args/CreateStudy_duplicated_by_instance_uidArgs";
import { DeleteManyStudy_duplicated_by_instance_uidArgs } from "./args/DeleteManyStudy_duplicated_by_instance_uidArgs";
import { DeleteStudy_duplicated_by_instance_uidArgs } from "./args/DeleteStudy_duplicated_by_instance_uidArgs";
import { FindManyStudy_duplicated_by_instance_uidArgs } from "./args/FindManyStudy_duplicated_by_instance_uidArgs";
import { FindOneStudy_duplicated_by_instance_uidArgs } from "./args/FindOneStudy_duplicated_by_instance_uidArgs";
import { UpdateManyStudy_duplicated_by_instance_uidArgs } from "./args/UpdateManyStudy_duplicated_by_instance_uidArgs";
import { UpdateStudy_duplicated_by_instance_uidArgs } from "./args/UpdateStudy_duplicated_by_instance_uidArgs";
import { UpsertStudy_duplicated_by_instance_uidArgs } from "./args/UpsertStudy_duplicated_by_instance_uidArgs";
import { Study_duplicated_by_instance_uid } from "../../../models/Study_duplicated_by_instance_uid";
import { AggregateStudy_duplicated_by_instance_uid } from "../../outputs/AggregateStudy_duplicated_by_instance_uid";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Study_duplicated_by_instance_uid)
export class Study_duplicated_by_instance_uidCrudResolver {
  @TypeGraphQL.Query(_returns => Study_duplicated_by_instance_uid, {
    nullable: true,
    description: undefined
  })
  async study_duplicated_by_instance_uid(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneStudy_duplicated_by_instance_uidArgs): Promise<Study_duplicated_by_instance_uid | undefined> {
    return ctx.prisma.study_duplicated_by_instance_uid.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Study_duplicated_by_instance_uid], {
    nullable: false,
    description: undefined
  })
  async study_duplicated_by_instance_uids(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyStudy_duplicated_by_instance_uidArgs): Promise<Study_duplicated_by_instance_uid[]> {
    return ctx.prisma.study_duplicated_by_instance_uid.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Study_duplicated_by_instance_uid, {
    nullable: false,
    description: undefined
  })
  async createStudy_duplicated_by_instance_uid(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateStudy_duplicated_by_instance_uidArgs): Promise<Study_duplicated_by_instance_uid> {
    return ctx.prisma.study_duplicated_by_instance_uid.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Study_duplicated_by_instance_uid, {
    nullable: true,
    description: undefined
  })
  async deleteStudy_duplicated_by_instance_uid(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteStudy_duplicated_by_instance_uidArgs): Promise<Study_duplicated_by_instance_uid | undefined> {
    return ctx.prisma.study_duplicated_by_instance_uid.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Study_duplicated_by_instance_uid, {
    nullable: true,
    description: undefined
  })
  async updateStudy_duplicated_by_instance_uid(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateStudy_duplicated_by_instance_uidArgs): Promise<Study_duplicated_by_instance_uid | undefined> {
    return ctx.prisma.study_duplicated_by_instance_uid.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyStudy_duplicated_by_instance_uid(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyStudy_duplicated_by_instance_uidArgs): Promise<BatchPayload> {
    return ctx.prisma.study_duplicated_by_instance_uid.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyStudy_duplicated_by_instance_uid(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyStudy_duplicated_by_instance_uidArgs): Promise<BatchPayload> {
    return ctx.prisma.study_duplicated_by_instance_uid.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Study_duplicated_by_instance_uid, {
    nullable: false,
    description: undefined
  })
  async upsertStudy_duplicated_by_instance_uid(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertStudy_duplicated_by_instance_uidArgs): Promise<Study_duplicated_by_instance_uid> {
    return ctx.prisma.study_duplicated_by_instance_uid.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateStudy_duplicated_by_instance_uid, {
    nullable: false,
    description: undefined
  })
  async aggregateStudy_duplicated_by_instance_uid(@TypeGraphQL.Args() args: AggregateStudy_duplicated_by_instance_uidArgs): Promise<AggregateStudy_duplicated_by_instance_uid> {
    return new AggregateStudy_duplicated_by_instance_uid();
  }
}
