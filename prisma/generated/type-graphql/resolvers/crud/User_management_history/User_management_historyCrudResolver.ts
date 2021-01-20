import * as TypeGraphQL from "type-graphql";
import { AggregateUser_management_historyArgs } from "./args/AggregateUser_management_historyArgs";
import { CreateUser_management_historyArgs } from "./args/CreateUser_management_historyArgs";
import { DeleteManyUser_management_historyArgs } from "./args/DeleteManyUser_management_historyArgs";
import { DeleteUser_management_historyArgs } from "./args/DeleteUser_management_historyArgs";
import { FindManyUser_management_historyArgs } from "./args/FindManyUser_management_historyArgs";
import { FindOneUser_management_historyArgs } from "./args/FindOneUser_management_historyArgs";
import { UpdateManyUser_management_historyArgs } from "./args/UpdateManyUser_management_historyArgs";
import { UpdateUser_management_historyArgs } from "./args/UpdateUser_management_historyArgs";
import { UpsertUser_management_historyArgs } from "./args/UpsertUser_management_historyArgs";
import { User_management_history } from "../../../models/User_management_history";
import { AggregateUser_management_history } from "../../outputs/AggregateUser_management_history";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => User_management_history)
export class User_management_historyCrudResolver {
  @TypeGraphQL.Query(_returns => User_management_history, {
    nullable: true,
    description: undefined
  })
  async user_management_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneUser_management_historyArgs): Promise<User_management_history | undefined> {
    return ctx.prisma.user_management_history.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [User_management_history], {
    nullable: false,
    description: undefined
  })
  async user_management_histories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyUser_management_historyArgs): Promise<User_management_history[]> {
    return ctx.prisma.user_management_history.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => User_management_history, {
    nullable: false,
    description: undefined
  })
  async createUser_management_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateUser_management_historyArgs): Promise<User_management_history> {
    return ctx.prisma.user_management_history.create(args);
  }

  @TypeGraphQL.Mutation(_returns => User_management_history, {
    nullable: true,
    description: undefined
  })
  async deleteUser_management_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteUser_management_historyArgs): Promise<User_management_history | undefined> {
    return ctx.prisma.user_management_history.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => User_management_history, {
    nullable: true,
    description: undefined
  })
  async updateUser_management_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateUser_management_historyArgs): Promise<User_management_history | undefined> {
    return ctx.prisma.user_management_history.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyUser_management_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyUser_management_historyArgs): Promise<BatchPayload> {
    return ctx.prisma.user_management_history.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyUser_management_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyUser_management_historyArgs): Promise<BatchPayload> {
    return ctx.prisma.user_management_history.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => User_management_history, {
    nullable: false,
    description: undefined
  })
  async upsertUser_management_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertUser_management_historyArgs): Promise<User_management_history> {
    return ctx.prisma.user_management_history.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateUser_management_history, {
    nullable: false,
    description: undefined
  })
  async aggregateUser_management_history(@TypeGraphQL.Args() args: AggregateUser_management_historyArgs): Promise<AggregateUser_management_history> {
    return new AggregateUser_management_history();
  }
}
