import * as TypeGraphQL from "type-graphql";
import { CreateNodulesArgs } from "./args/CreateNodulesArgs";
import { Nodules } from "../../../models/Nodules";

@TypeGraphQL.Resolver(_of => Nodules)
export class CreateNodulesResolver {
  @TypeGraphQL.Mutation(_returns => Nodules, {
    nullable: false,
    description: undefined
  })
  async createNodules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateNodulesArgs): Promise<Nodules> {
    return ctx.prisma.nodules.create(args);
  }
}
