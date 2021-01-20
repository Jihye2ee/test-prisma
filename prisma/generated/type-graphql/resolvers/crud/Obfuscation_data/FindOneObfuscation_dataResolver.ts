import * as TypeGraphQL from "type-graphql";
import { FindOneObfuscation_dataArgs } from "./args/FindOneObfuscation_dataArgs";
import { Obfuscation_data } from "../../../models/Obfuscation_data";

@TypeGraphQL.Resolver(_of => Obfuscation_data)
export class FindOneObfuscation_dataResolver {
  @TypeGraphQL.Query(_returns => Obfuscation_data, {
    nullable: true,
    description: undefined
  })
  async findOneObfuscation_data(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneObfuscation_dataArgs): Promise<Obfuscation_data | undefined> {
    return ctx.prisma.obfuscation_data.findOne(args);
  }
}
