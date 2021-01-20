import * as TypeGraphQL from "type-graphql";
import { UpsertObfuscation_dataArgs } from "./args/UpsertObfuscation_dataArgs";
import { Obfuscation_data } from "../../../models/Obfuscation_data";

@TypeGraphQL.Resolver(_of => Obfuscation_data)
export class UpsertObfuscation_dataResolver {
  @TypeGraphQL.Mutation(_returns => Obfuscation_data, {
    nullable: false,
    description: undefined
  })
  async upsertObfuscation_data(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertObfuscation_dataArgs): Promise<Obfuscation_data> {
    return ctx.prisma.obfuscation_data.upsert(args);
  }
}
