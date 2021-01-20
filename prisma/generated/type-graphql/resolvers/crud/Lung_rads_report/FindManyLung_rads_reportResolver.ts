import * as TypeGraphQL from "type-graphql";
import { FindManyLung_rads_reportArgs } from "./args/FindManyLung_rads_reportArgs";
import { Lung_rads_report } from "../../../models/Lung_rads_report";

@TypeGraphQL.Resolver(_of => Lung_rads_report)
export class FindManyLung_rads_reportResolver {
  @TypeGraphQL.Query(_returns => [Lung_rads_report], {
    nullable: false,
    description: undefined
  })
  async lung_rads_reports(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyLung_rads_reportArgs): Promise<Lung_rads_report[]> {
    return ctx.prisma.lung_rads_report.findMany(args);
  }
}
