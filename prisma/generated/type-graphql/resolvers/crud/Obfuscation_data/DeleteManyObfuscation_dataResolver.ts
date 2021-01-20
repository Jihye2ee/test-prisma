import * as TypeGraphQL from "type-graphql";
import { DeleteManyObfuscation_dataArgs } from "./args/DeleteManyObfuscation_dataArgs";
import { Obfuscation_data } from "../../../models/Obfuscation_data";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Obfuscation_data)
export class DeleteManyObfuscation_dataResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyObfuscation_data(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyObfuscation_dataArgs): Promise<BatchPayload> {
    return ctx.prisma.obfuscation_data.deleteMany(args);
  }
}
