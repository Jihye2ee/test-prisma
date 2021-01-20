import * as TypeGraphQL from "type-graphql";
import { AggregateUser_signin_historyArgs } from "./args/AggregateUser_signin_historyArgs";
import { CreateUser_signin_historyArgs } from "./args/CreateUser_signin_historyArgs";
import { DeleteManyUser_signin_historyArgs } from "./args/DeleteManyUser_signin_historyArgs";
import { DeleteUser_signin_historyArgs } from "./args/DeleteUser_signin_historyArgs";
import { FindManyUser_signin_historyArgs } from "./args/FindManyUser_signin_historyArgs";
import { FindOneUser_signin_historyArgs } from "./args/FindOneUser_signin_historyArgs";
import { UpdateManyUser_signin_historyArgs } from "./args/UpdateManyUser_signin_historyArgs";
import { UpdateUser_signin_historyArgs } from "./args/UpdateUser_signin_historyArgs";
import { UpsertUser_signin_historyArgs } from "./args/UpsertUser_signin_historyArgs";
import { User_signin_history } from "../../../models/User_signin_history";
import { AggregateUser_signin_history } from "../../outputs/AggregateUser_signin_history";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => User_signin_history)
export class User_signin_historyCrudResolver {
  @TypeGraphQL.Query(_returns => User_signin_history, {
    nullable: true,
    description: undefined
  })
  async user_signin_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneUser_signin_historyArgs): Promise<User_signin_history | undefined> {
    return ctx.prisma.user_signin_history.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [User_signin_history], {
    nullable: false,
    description: undefined
  })
  async user_signin_histories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyUser_signin_historyArgs): Promise<User_signin_history[]> {
    return ctx.prisma.user_signin_history.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => User_signin_history, {
    nullable: false,
    description: undefined
  })
  async createUser_signin_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateUser_signin_historyArgs): Promise<User_signin_history> {
    return ctx.prisma.user_signin_history.create(args);
  }

  @TypeGraphQL.Mutation(_returns => User_signin_history, {
    nullable: true,
    description: undefined
  })
  async deleteUser_signin_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteUser_signin_historyArgs): Promise<User_signin_history | undefined> {
    return ctx.prisma.user_signin_history.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => User_signin_history, {
    nullable: true,
    description: undefined
  })
  async updateUser_signin_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateUser_signin_historyArgs): Promise<User_signin_history | undefined> {
    return ctx.prisma.user_signin_history.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyUser_signin_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyUser_signin_historyArgs): Promise<BatchPayload> {
    return ctx.prisma.user_signin_history.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyUser_signin_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyUser_signin_historyArgs): Promise<BatchPayload> {
    return ctx.prisma.user_signin_history.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => User_signin_history, {
    nullable: false,
    description: undefined
  })
  async upsertUser_signin_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertUser_signin_historyArgs): Promise<User_signin_history> {
    return ctx.prisma.user_signin_history.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateUser_signin_history, {
    nullable: false,
    description: undefined
  })
  async aggregateUser_signin_history(@TypeGraphQL.Args() args: AggregateUser_signin_historyArgs): Promise<AggregateUser_signin_history> {
    return new AggregateUser_signin_history();
  }
}
