import * as TypeGraphQL from "type-graphql";
import { UpdateEnvironmentArgs } from "./args/UpdateEnvironmentArgs";
import { Environment } from "../../../models/Environment";

@TypeGraphQL.Resolver(_of => Environment)
export class UpdateEnvironmentResolver {
  @TypeGraphQL.Mutation(_returns => Environment, {
    nullable: true,
    description: undefined
  })
  async updateEnvironment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateEnvironmentArgs): Promise<Environment | undefined> {
    return ctx.prisma.environment.update(args);
  }
}
