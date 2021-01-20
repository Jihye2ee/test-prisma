import * as TypeGraphQL from "type-graphql";
import { Nodule_analysis_request_history } from "../../../models/Nodule_analysis_request_history";
import { Nodules } from "../../../models/Nodules";
import { Nodule_analysis_request_historyNodulesArgs } from "./args/Nodule_analysis_request_historyNodulesArgs";

@TypeGraphQL.Resolver(_of => Nodule_analysis_request_history)
export class Nodule_analysis_request_historyRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Nodules], {
    nullable: true,
    description: undefined,
  })
  async nodules(@TypeGraphQL.Root() nodule_analysis_request_history: Nodule_analysis_request_history, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: Nodule_analysis_request_historyNodulesArgs): Promise<Nodules[] | undefined> {
    return ctx.prisma.nodule_analysis_request_history.findOne({
      where: {
        seq: nodule_analysis_request_history.seq,
      },
    }).nodules(args);
  }
}
