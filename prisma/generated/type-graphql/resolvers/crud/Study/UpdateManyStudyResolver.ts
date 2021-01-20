import * as TypeGraphQL from "type-graphql";
import { UpdateManyStudyArgs } from "./args/UpdateManyStudyArgs";
import { Study } from "../../../models/Study";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Study)
export class UpdateManyStudyResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyStudy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyStudyArgs): Promise<BatchPayload> {
    return ctx.prisma.study.updateMany(args);
  }
}
