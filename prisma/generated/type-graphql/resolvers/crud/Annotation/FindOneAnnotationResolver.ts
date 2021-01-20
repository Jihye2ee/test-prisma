import * as TypeGraphQL from "type-graphql";
import { FindOneAnnotationArgs } from "./args/FindOneAnnotationArgs";
import { Annotation } from "../../../models/Annotation";

@TypeGraphQL.Resolver(_of => Annotation)
export class FindOneAnnotationResolver {
  @TypeGraphQL.Query(_returns => Annotation, {
    nullable: true,
    description: undefined
  })
  async annotation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneAnnotationArgs): Promise<Annotation | undefined> {
    return ctx.prisma.annotation.findOne(args);
  }
}
