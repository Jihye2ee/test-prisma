import * as TypeGraphQL from "type-graphql";
import { FindManySeriesArgs } from "./args/FindManySeriesArgs";
import { Series } from "../../../models/Series";

@TypeGraphQL.Resolver(_of => Series)
export class FindManySeriesResolver {
  @TypeGraphQL.Query(_returns => [Series], {
    nullable: false,
    description: undefined
  })
  async findManySeries(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManySeriesArgs): Promise<Series[]> {
    return ctx.prisma.series.findMany(args);
  }
}
