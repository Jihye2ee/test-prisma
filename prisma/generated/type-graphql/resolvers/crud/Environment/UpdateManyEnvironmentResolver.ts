import * as TypeGraphQL from "type-graphql";
import { UpdateManyEnvironmentArgs } from "./args/UpdateManyEnvironmentArgs";
import { Environment } from "../../../models/Environment";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Environment)
export class UpdateManyEnvironmentResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyEnvironment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyEnvironmentArgs): Promise<BatchPayload> {
    return ctx.prisma.environment.updateMany(args);
  }
}
