import * as TypeGraphQL from "type-graphql";
import { CreateSeriesArgs } from "./args/CreateSeriesArgs";
import { Series } from "../../../models/Series";

@TypeGraphQL.Resolver(_of => Series)
export class CreateSeriesResolver {
  @TypeGraphQL.Mutation(_returns => Series, {
    nullable: false,
    description: undefined
  })
  async createSeries(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateSeriesArgs): Promise<Series> {
    return ctx.prisma.series.create(args);
  }
}
