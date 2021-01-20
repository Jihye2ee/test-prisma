import * as TypeGraphQL from "type-graphql";
import { AggregateAnnotationArgs } from "./args/AggregateAnnotationArgs";
import { CreateAnnotationArgs } from "./args/CreateAnnotationArgs";
import { DeleteAnnotationArgs } from "./args/DeleteAnnotationArgs";
import { DeleteManyAnnotationArgs } from "./args/DeleteManyAnnotationArgs";
import { FindManyAnnotationArgs } from "./args/FindManyAnnotationArgs";
import { FindOneAnnotationArgs } from "./args/FindOneAnnotationArgs";
import { UpdateAnnotationArgs } from "./args/UpdateAnnotationArgs";
import { UpdateManyAnnotationArgs } from "./args/UpdateManyAnnotationArgs";
import { UpsertAnnotationArgs } from "./args/UpsertAnnotationArgs";
import { Annotation } from "../../../models/Annotation";
import { AggregateAnnotation } from "../../outputs/AggregateAnnotation";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Annotation)
export class AnnotationCrudResolver {
  @TypeGraphQL.Query(_returns => Annotation, {
    nullable: true,
    description: undefined
  })
  async annotation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneAnnotationArgs): Promise<Annotation | undefined> {
    return ctx.prisma.annotation.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Annotation], {
    nullable: false,
    description: undefined
  })
  async annotations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyAnnotationArgs): Promise<Annotation[]> {
    return ctx.prisma.annotation.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Annotation, {
    nullable: false,
    description: undefined
  })
  async createAnnotation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateAnnotationArgs): Promise<Annotation> {
    return ctx.prisma.annotation.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Annotation, {
    nullable: true,
    description: undefined
  })
  async deleteAnnotation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteAnnotationArgs): Promise<Annotation | undefined> {
    return ctx.prisma.annotation.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Annotation, {
    nullable: true,
    description: undefined
  })
  async updateAnnotation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateAnnotationArgs): Promise<Annotation | undefined> {
    return ctx.prisma.annotation.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyAnnotation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyAnnotationArgs): Promise<BatchPayload> {
    return ctx.prisma.annotation.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyAnnotation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyAnnotationArgs): Promise<BatchPayload> {
    return ctx.prisma.annotation.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Annotation, {
    nullable: false,
    description: undefined
  })
  async upsertAnnotation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertAnnotationArgs): Promise<Annotation> {
    return ctx.prisma.annotation.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateAnnotation, {
    nullable: false,
    description: undefined
  })
  async aggregateAnnotation(@TypeGraphQL.Args() args: AggregateAnnotationArgs): Promise<AggregateAnnotation> {
    return new AggregateAnnotation();
  }
}
