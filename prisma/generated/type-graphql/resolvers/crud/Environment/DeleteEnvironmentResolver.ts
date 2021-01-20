import * as TypeGraphQL from "type-graphql";
import { DeleteEnvironmentArgs } from "./args/DeleteEnvironmentArgs";
import { Environment } from "../../../models/Environment";

@TypeGraphQL.Resolver(_of => Environment)
export class DeleteEnvironmentResolver {
  @TypeGraphQL.Mutation(_returns => Environment, {
    nullable: true,
    description: undefined
  })
  async deleteEnvironment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteEnvironmentArgs): Promise<Environment | undefined> {
    return ctx.prisma.environment.delete(args);
  }
}
