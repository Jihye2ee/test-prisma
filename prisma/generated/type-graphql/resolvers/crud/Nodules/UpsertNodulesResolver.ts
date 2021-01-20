import * as TypeGraphQL from "type-graphql";
import { UpsertNodulesArgs } from "./args/UpsertNodulesArgs";
import { Nodules } from "../../../models/Nodules";

@TypeGraphQL.Resolver(_of => Nodules)
export class UpsertNodulesResolver {
  @TypeGraphQL.Mutation(_returns => Nodules, {
    nullable: false,
    description: undefined
  })
  async upsertNodules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertNodulesArgs): Promise<Nodules> {
    return ctx.prisma.nodules.upsert(args);
  }
}
