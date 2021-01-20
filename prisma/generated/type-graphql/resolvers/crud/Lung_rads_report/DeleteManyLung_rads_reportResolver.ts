import * as TypeGraphQL from "type-graphql";
import { DeleteManyLung_rads_reportArgs } from "./args/DeleteManyLung_rads_reportArgs";
import { Lung_rads_report } from "../../../models/Lung_rads_report";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Lung_rads_report)
export class DeleteManyLung_rads_reportResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyLung_rads_report(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyLung_rads_reportArgs): Promise<BatchPayload> {
    return ctx.prisma.lung_rads_report.deleteMany(args);
  }
}
