import * as TypeGraphQL from "type-graphql";
import { FindOneLung_rads_reportArgs } from "./args/FindOneLung_rads_reportArgs";
import { Lung_rads_report } from "../../../models/Lung_rads_report";

@TypeGraphQL.Resolver(_of => Lung_rads_report)
export class FindOneLung_rads_reportResolver {
  @TypeGraphQL.Query(_returns => Lung_rads_report, {
    nullable: true,
    description: undefined
  })
  async lung_rads_report(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneLung_rads_reportArgs): Promise<Lung_rads_report | undefined> {
    return ctx.prisma.lung_rads_report.findOne(args);
  }
}
