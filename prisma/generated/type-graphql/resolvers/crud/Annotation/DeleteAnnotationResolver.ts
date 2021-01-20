import * as TypeGraphQL from "type-graphql";
import { DeleteAnnotationArgs } from "./args/DeleteAnnotationArgs";
import { Annotation } from "../../../models/Annotation";

@TypeGraphQL.Resolver(_of => Annotation)
export class DeleteAnnotationResolver {
  @TypeGraphQL.Mutation(_returns => Annotation, {
    nullable: true,
    description: undefined
  })
  async deleteAnnotation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteAnnotationArgs): Promise<Annotation | undefined> {
    return ctx.prisma.annotation.delete(args);
  }
}
