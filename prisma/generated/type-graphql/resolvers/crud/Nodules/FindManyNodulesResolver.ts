import * as TypeGraphQL from "type-graphql";
import { FindManyNodulesArgs } from "./args/FindManyNodulesArgs";
import { Nodules } from "../../../models/Nodules";

@TypeGraphQL.Resolver(_of => Nodules)
export class FindManyNodulesResolver {
  @TypeGraphQL.Query(_returns => [Nodules], {
    nullable: false,
    description: undefined
  })
  async findManyNodules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyNodulesArgs): Promise<Nodules[]> {
    return ctx.prisma.nodules.findMany(args);
  }
}
