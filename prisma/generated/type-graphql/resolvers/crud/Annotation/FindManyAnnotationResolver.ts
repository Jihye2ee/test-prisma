import * as TypeGraphQL from "type-graphql";
import { FindManyAnnotationArgs } from "./args/FindManyAnnotationArgs";
import { Annotation } from "../../../models/Annotation";

@TypeGraphQL.Resolver(_of => Annotation)
export class FindManyAnnotationResolver {
  @TypeGraphQL.Query(_returns => [Annotation], {
    nullable: false,
    description: undefined
  })
  async annotations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyAnnotationArgs): Promise<Annotation[]> {
    return ctx.prisma.annotation.findMany(args);
  }
}
