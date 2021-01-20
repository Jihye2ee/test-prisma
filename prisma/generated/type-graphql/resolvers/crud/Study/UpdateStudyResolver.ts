import * as TypeGraphQL from "type-graphql";
import { UpdateStudyArgs } from "./args/UpdateStudyArgs";
import { Study } from "../../../models/Study";

@TypeGraphQL.Resolver(_of => Study)
export class UpdateStudyResolver {
  @TypeGraphQL.Mutation(_returns => Study, {
    nullable: true,
    description: undefined
  })
  async updateStudy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateStudyArgs): Promise<Study | undefined> {
    return ctx.prisma.study.update(args);
  }
}
