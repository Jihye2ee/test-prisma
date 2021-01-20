import * as TypeGraphQL from "type-graphql";
import { CreateObfuscation_dataArgs } from "./args/CreateObfuscation_dataArgs";
import { Obfuscation_data } from "../../../models/Obfuscation_data";

@TypeGraphQL.Resolver(_of => Obfuscation_data)
export class CreateObfuscation_dataResolver {
  @TypeGraphQL.Mutation(_returns => Obfuscation_data, {
    nullable: false,
    description: undefined
  })
  async createObfuscation_data(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateObfuscation_dataArgs): Promise<Obfuscation_data> {
    return ctx.prisma.obfuscation_data.create(args);
  }
}
