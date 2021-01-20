import * as TypeGraphQL from "type-graphql";
import { UpdateObfuscation_dataArgs } from "./args/UpdateObfuscation_dataArgs";
import { Obfuscation_data } from "../../../models/Obfuscation_data";

@TypeGraphQL.Resolver(_of => Obfuscation_data)
export class UpdateObfuscation_dataResolver {
  @TypeGraphQL.Mutation(_returns => Obfuscation_data, {
    nullable: true,
    description: undefined
  })
  async updateObfuscation_data(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateObfuscation_dataArgs): Promise<Obfuscation_data | undefined> {
    return ctx.prisma.obfuscation_data.update(args);
  }
}
