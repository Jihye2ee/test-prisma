import * as TypeGraphQL from "type-graphql";
import { DeleteManyStudyArgs } from "./args/DeleteManyStudyArgs";
import { Study } from "../../../models/Study";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Study)
export class DeleteManyStudyResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyStudy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyStudyArgs): Promise<BatchPayload> {
    return ctx.prisma.study.deleteMany(args);
  }
}
