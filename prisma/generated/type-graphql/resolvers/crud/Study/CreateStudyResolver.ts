import * as TypeGraphQL from "type-graphql";
import { CreateStudyArgs } from "./args/CreateStudyArgs";
import { Study } from "../../../models/Study";

@TypeGraphQL.Resolver(_of => Study)
export class CreateStudyResolver {
  @TypeGraphQL.Mutation(_returns => Study, {
    nullable: false,
    description: undefined
  })
  async createStudy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateStudyArgs): Promise<Study> {
    return ctx.prisma.study.create(args);
  }
}
