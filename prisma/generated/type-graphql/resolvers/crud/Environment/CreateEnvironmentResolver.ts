import * as TypeGraphQL from "type-graphql";
import { CreateEnvironmentArgs } from "./args/CreateEnvironmentArgs";
import { Environment } from "../../../models/Environment";

@TypeGraphQL.Resolver(_of => Environment)
export class CreateEnvironmentResolver {
  @TypeGraphQL.Mutation(_returns => Environment, {
    nullable: false,
    description: undefined
  })
  async createEnvironment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateEnvironmentArgs): Promise<Environment> {
    return ctx.prisma.environment.create(args);
  }
}
