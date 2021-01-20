import * as TypeGraphQL from "type-graphql";
import { FindOneNodulesArgs } from "./args/FindOneNodulesArgs";
import { Nodules } from "../../../models/Nodules";

@TypeGraphQL.Resolver(_of => Nodules)
export class FindOneNodulesResolver {
  @TypeGraphQL.Query(_returns => Nodules, {
    nullable: true,
    description: undefined
  })
  async findOneNodules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneNodulesArgs): Promise<Nodules | undefined> {
    return ctx.prisma.nodules.findOne(args);
  }
}
