import * as TypeGraphQL from "type-graphql";
import { UpdateManyAnnotationArgs } from "./args/UpdateManyAnnotationArgs";
import { Annotation } from "../../../models/Annotation";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Annotation)
export class UpdateManyAnnotationResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyAnnotation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyAnnotationArgs): Promise<BatchPayload> {
    return ctx.prisma.annotation.updateMany(args);
  }
}
