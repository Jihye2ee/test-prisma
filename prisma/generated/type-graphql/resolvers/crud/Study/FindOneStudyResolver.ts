import * as TypeGraphQL from "type-graphql";
import { FindOneStudyArgs } from "./args/FindOneStudyArgs";
import { Study } from "../../../models/Study";

@TypeGraphQL.Resolver(_of => Study)
export class FindOneStudyResolver {
  @TypeGraphQL.Query(_returns => Study, {
    nullable: true,
    description: undefined
  })
  async study(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneStudyArgs): Promise<Study | undefined> {
    return ctx.prisma.study.findOne(args);
  }
}
