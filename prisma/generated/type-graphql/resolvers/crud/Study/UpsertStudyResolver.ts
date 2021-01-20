import * as TypeGraphQL from "type-graphql";
import { UpsertStudyArgs } from "./args/UpsertStudyArgs";
import { Study } from "../../../models/Study";

@TypeGraphQL.Resolver(_of => Study)
export class UpsertStudyResolver {
  @TypeGraphQL.Mutation(_returns => Study, {
    nullable: false,
    description: undefined
  })
  async upsertStudy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertStudyArgs): Promise<Study> {
    return ctx.prisma.study.upsert(args);
  }
}
