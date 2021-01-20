import * as TypeGraphQL from "type-graphql";
import { FindOneEnvironmentArgs } from "./args/FindOneEnvironmentArgs";
import { Environment } from "../../../models/Environment";

@TypeGraphQL.Resolver(_of => Environment)
export class FindOneEnvironmentResolver {
  @TypeGraphQL.Query(_returns => Environment, {
    nullable: true,
    description: undefined
  })
  async environment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneEnvironmentArgs): Promise<Environment | undefined> {
    return ctx.prisma.environment.findOne(args);
  }
}
