import * as TypeGraphQL from "type-graphql";
import { UpdateManyObfuscation_dataArgs } from "./args/UpdateManyObfuscation_dataArgs";
import { Obfuscation_data } from "../../../models/Obfuscation_data";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Obfuscation_data)
export class UpdateManyObfuscation_dataResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyObfuscation_data(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyObfuscation_dataArgs): Promise<BatchPayload> {
    return ctx.prisma.obfuscation_data.updateMany(args);
  }
}
