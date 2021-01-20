import * as TypeGraphQL from "type-graphql";
import { DeleteManyEnvironmentArgs } from "./args/DeleteManyEnvironmentArgs";
import { Environment } from "../../../models/Environment";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Environment)
export class DeleteManyEnvironmentResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyEnvironment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyEnvironmentArgs): Promise<BatchPayload> {
    return ctx.prisma.environment.deleteMany(args);
  }
}
