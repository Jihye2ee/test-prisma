import * as TypeGraphQL from "type-graphql";
import { FindManyStudyArgs } from "./args/FindManyStudyArgs";
import { Study } from "../../../models/Study";

@TypeGraphQL.Resolver(_of => Study)
export class FindManyStudyResolver {
  @TypeGraphQL.Query(_returns => [Study], {
    nullable: false,
    description: undefined
  })
  async studies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyStudyArgs): Promise<Study[]> {
    return ctx.prisma.study.findMany(args);
  }
}
