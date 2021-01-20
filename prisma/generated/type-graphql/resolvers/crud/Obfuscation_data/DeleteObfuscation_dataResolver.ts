import * as TypeGraphQL from "type-graphql";
import { DeleteObfuscation_dataArgs } from "./args/DeleteObfuscation_dataArgs";
import { Obfuscation_data } from "../../../models/Obfuscation_data";

@TypeGraphQL.Resolver(_of => Obfuscation_data)
export class DeleteObfuscation_dataResolver {
  @TypeGraphQL.Mutation(_returns => Obfuscation_data, {
    nullable: true,
    description: undefined
  })
  async deleteObfuscation_data(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteObfuscation_dataArgs): Promise<Obfuscation_data | undefined> {
    return ctx.prisma.obfuscation_data.delete(args);
  }
}
