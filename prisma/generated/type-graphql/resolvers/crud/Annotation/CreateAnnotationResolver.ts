import * as TypeGraphQL from "type-graphql";
import { CreateAnnotationArgs } from "./args/CreateAnnotationArgs";
import { Annotation } from "../../../models/Annotation";

@TypeGraphQL.Resolver(_of => Annotation)
export class CreateAnnotationResolver {
  @TypeGraphQL.Mutation(_returns => Annotation, {
    nullable: false,
    description: undefined
  })
  async createAnnotation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateAnnotationArgs): Promise<Annotation> {
    return ctx.prisma.annotation.create(args);
  }
}
