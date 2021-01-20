import * as TypeGraphQL from "type-graphql";
import { CreateNodule_analysis_request_historyArgs } from "./args/CreateNodule_analysis_request_historyArgs";
import { Nodule_analysis_request_history } from "../../../models/Nodule_analysis_request_history";

@TypeGraphQL.Resolver(_of => Nodule_analysis_request_history)
export class CreateNodule_analysis_request_historyResolver {
  @TypeGraphQL.Mutation(_returns => Nodule_analysis_request_history, {
    nullable: false,
    description: undefined
  })
  async createNodule_analysis_request_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateNodule_analysis_request_historyArgs): Promise<Nodule_analysis_request_history> {
    return ctx.prisma.nodule_analysis_request_history.create(args);
  }
}
