import * as TypeGraphQL from "type-graphql";
import { AggregateEnvironmentArgs } from "./args/AggregateEnvironmentArgs";
import { CreateEnvironmentArgs } from "./args/CreateEnvironmentArgs";
import { DeleteEnvironmentArgs } from "./args/DeleteEnvironmentArgs";
import { DeleteManyEnvironmentArgs } from "./args/DeleteManyEnvironmentArgs";
import { FindManyEnvironmentArgs } from "./args/FindManyEnvironmentArgs";
import { FindOneEnvironmentArgs } from "./args/FindOneEnvironmentArgs";
import { UpdateEnvironmentArgs } from "./args/UpdateEnvironmentArgs";
import { UpdateManyEnvironmentArgs } from "./args/UpdateManyEnvironmentArgs";
import { UpsertEnvironmentArgs } from "./args/UpsertEnvironmentArgs";
import { Environment } from "../../../models/Environment";
import { AggregateEnvironment } from "../../outputs/AggregateEnvironment";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Environment)
export class EnvironmentCrudResolver {
  @TypeGraphQL.Query(_returns => Environment, {
    nullable: true,
    description: undefined
  })
  async environment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneEnvironmentArgs): Promise<Environment | undefined> {
    return ctx.prisma.environment.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Environment], {
    nullable: false,
    description: undefined
  })
  async environments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyEnvironmentArgs): Promise<Environment[]> {
    return ctx.prisma.environment.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Environment, {
    nullable: false,
    description: undefined
  })
  async createEnvironment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateEnvironmentArgs): Promise<Environment> {
    return ctx.prisma.environment.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Environment, {
    nullable: true,
    description: undefined
  })
  async deleteEnvironment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteEnvironmentArgs): Promise<Environment | undefined> {
    return ctx.prisma.environment.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Environment, {
    nullable: true,
    description: undefined
  })
  async updateEnvironment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateEnvironmentArgs): Promise<Environment | undefined> {
    return ctx.prisma.environment.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyEnvironment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyEnvironmentArgs): Promise<BatchPayload> {
    return ctx.prisma.environment.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyEnvironment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyEnvironmentArgs): Promise<BatchPayload> {
    return ctx.prisma.environment.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Environment, {
    nullable: false,
    description: undefined
  })
  async upsertEnvironment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertEnvironmentArgs): Promise<Environment> {
    return ctx.prisma.environment.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateEnvironment, {
    nullable: false,
    description: undefined
  })
  async aggregateEnvironment(@TypeGraphQL.Args() args: AggregateEnvironmentArgs): Promise<AggregateEnvironment> {
    return new AggregateEnvironment();
  }
}
