import * as TypeGraphQL from "type-graphql";
import { UpsertAnnotationArgs } from "./args/UpsertAnnotationArgs";
import { Annotation } from "../../../models/Annotation";

@TypeGraphQL.Resolver(_of => Annotation)
export class UpsertAnnotationResolver {
  @TypeGraphQL.Mutation(_returns => Annotation, {
    nullable: false,
    description: undefined
  })
  async upsertAnnotation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertAnnotationArgs): Promise<Annotation> {
    return ctx.prisma.annotation.upsert(args);
  }
}
