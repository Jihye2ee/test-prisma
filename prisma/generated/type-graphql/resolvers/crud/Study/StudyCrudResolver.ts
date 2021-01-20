import * as TypeGraphQL from "type-graphql";
import { AggregateStudyArgs } from "./args/AggregateStudyArgs";
import { CreateStudyArgs } from "./args/CreateStudyArgs";
import { DeleteManyStudyArgs } from "./args/DeleteManyStudyArgs";
import { DeleteStudyArgs } from "./args/DeleteStudyArgs";
import { FindManyStudyArgs } from "./args/FindManyStudyArgs";
import { FindOneStudyArgs } from "./args/FindOneStudyArgs";
import { UpdateManyStudyArgs } from "./args/UpdateManyStudyArgs";
import { UpdateStudyArgs } from "./args/UpdateStudyArgs";
import { UpsertStudyArgs } from "./args/UpsertStudyArgs";
import { Study } from "../../../models/Study";
import { AggregateStudy } from "../../outputs/AggregateStudy";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Study)
export class StudyCrudResolver {
  @TypeGraphQL.Query(_returns => Study, {
    nullable: true,
    description: undefined
  })
  async study(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneStudyArgs): Promise<Study | undefined> {
    return ctx.prisma.study.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Study], {
    nullable: false,
    description: undefined
  })
  async studies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyStudyArgs): Promise<Study[]> {
    return ctx.prisma.study.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Study, {
    nullable: false,
    description: undefined
  })
  async createStudy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateStudyArgs): Promise<Study> {
    return ctx.prisma.study.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Study, {
    nullable: true,
    description: undefined
  })
  async deleteStudy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteStudyArgs): Promise<Study | undefined> {
    return ctx.prisma.study.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Study, {
    nullable: true,
    description: undefined
  })
  async updateStudy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateStudyArgs): Promise<Study | undefined> {
    return ctx.prisma.study.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyStudy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyStudyArgs): Promise<BatchPayload> {
    return ctx.prisma.study.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyStudy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyStudyArgs): Promise<BatchPayload> {
    return ctx.prisma.study.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Study, {
    nullable: false,
    description: undefined
  })
  async upsertStudy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertStudyArgs): Promise<Study> {
    return ctx.prisma.study.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateStudy, {
    nullable: false,
    description: undefined
  })
  async aggregateStudy(@TypeGraphQL.Args() args: AggregateStudyArgs): Promise<AggregateStudy> {
    return new AggregateStudy();
  }
}
