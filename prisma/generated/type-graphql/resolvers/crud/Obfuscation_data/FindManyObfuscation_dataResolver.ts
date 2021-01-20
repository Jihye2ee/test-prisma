import * as TypeGraphQL from "type-graphql";
import { FindManyObfuscation_dataArgs } from "./args/FindManyObfuscation_dataArgs";
import { Obfuscation_data } from "../../../models/Obfuscation_data";

@TypeGraphQL.Resolver(_of => Obfuscation_data)
export class FindManyObfuscation_dataResolver {
  @TypeGraphQL.Query(_returns => [Obfuscation_data], {
    nullable: false,
    description: undefined
  })
  async findManyObfuscation_data(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyObfuscation_dataArgs): Promise<Obfuscation_data[]> {
    return ctx.prisma.obfuscation_data.findMany(args);
  }
}
