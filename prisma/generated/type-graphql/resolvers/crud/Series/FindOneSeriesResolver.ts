import * as TypeGraphQL from "type-graphql";
import { FindOneSeriesArgs } from "./args/FindOneSeriesArgs";
import { Series } from "../../../models/Series";

@TypeGraphQL.Resolver(_of => Series)
export class FindOneSeriesResolver {
  @TypeGraphQL.Query(_returns => Series, {
    nullable: true,
    description: undefined
  })
  async findOneSeries(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneSeriesArgs): Promise<Series | undefined> {
    return ctx.prisma.series.findOne(args);
  }
}
