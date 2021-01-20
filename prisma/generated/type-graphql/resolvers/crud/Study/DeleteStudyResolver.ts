import * as TypeGraphQL from "type-graphql";
import { DeleteStudyArgs } from "./args/DeleteStudyArgs";
import { Study } from "../../../models/Study";

@TypeGraphQL.Resolver(_of => Study)
export class DeleteStudyResolver {
  @TypeGraphQL.Mutation(_returns => Study, {
    nullable: true,
    description: undefined
  })
  async deleteStudy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteStudyArgs): Promise<Study | undefined> {
    return ctx.prisma.study.delete(args);
  }
}
