import * as TypeGraphQL from "type-graphql";
import { UpsertEnvironmentArgs } from "./args/UpsertEnvironmentArgs";
import { Environment } from "../../../models/Environment";

@TypeGraphQL.Resolver(_of => Environment)
export class UpsertEnvironmentResolver {
  @TypeGraphQL.Mutation(_returns => Environment, {
    nullable: false,
    description: undefined
  })
  async upsertEnvironment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertEnvironmentArgs): Promise<Environment> {
    return ctx.prisma.environment.upsert(args);
  }
}
