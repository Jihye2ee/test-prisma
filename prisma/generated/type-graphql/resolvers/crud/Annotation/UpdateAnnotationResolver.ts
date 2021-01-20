import * as TypeGraphQL from "type-graphql";
import { UpdateAnnotationArgs } from "./args/UpdateAnnotationArgs";
import { Annotation } from "../../../models/Annotation";

@TypeGraphQL.Resolver(_of => Annotation)
export class UpdateAnnotationResolver {
  @TypeGraphQL.Mutation(_returns => Annotation, {
    nullable: true,
    description: undefined
  })
  async updateAnnotation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateAnnotationArgs): Promise<Annotation | undefined> {
    return ctx.prisma.annotation.update(args);
  }
}
