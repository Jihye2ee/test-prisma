import * as TypeGraphQL from "type-graphql";
import { DeleteManyAnnotationArgs } from "./args/DeleteManyAnnotationArgs";
import { Annotation } from "../../../models/Annotation";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Annotation)
export class DeleteManyAnnotationResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyAnnotation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyAnnotationArgs): Promise<BatchPayload> {
    return ctx.prisma.annotation.deleteMany(args);
  }
}
