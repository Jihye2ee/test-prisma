import * as TypeGraphQL from "type-graphql";
import { CreateLung_rads_reportArgs } from "./args/CreateLung_rads_reportArgs";
import { Lung_rads_report } from "../../../models/Lung_rads_report";

@TypeGraphQL.Resolver(_of => Lung_rads_report)
export class CreateLung_rads_reportResolver {
  @TypeGraphQL.Mutation(_returns => Lung_rads_report, {
    nullable: false,
    description: undefined
  })
  async createLung_rads_report(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateLung_rads_reportArgs): Promise<Lung_rads_report> {
    return ctx.prisma.lung_rads_report.create(args);
  }
}
