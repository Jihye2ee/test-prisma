import * as TypeGraphQL from "type-graphql";
import { AggregateUser_study_open_historyArgs } from "./args/AggregateUser_study_open_historyArgs";
import { CreateUser_study_open_historyArgs } from "./args/CreateUser_study_open_historyArgs";
import { DeleteManyUser_study_open_historyArgs } from "./args/DeleteManyUser_study_open_historyArgs";
import { DeleteUser_study_open_historyArgs } from "./args/DeleteUser_study_open_historyArgs";
import { FindManyUser_study_open_historyArgs } from "./args/FindManyUser_study_open_historyArgs";
import { FindOneUser_study_open_historyArgs } from "./args/FindOneUser_study_open_historyArgs";
import { UpdateManyUser_study_open_historyArgs } from "./args/UpdateManyUser_study_open_historyArgs";
import { UpdateUser_study_open_historyArgs } from "./args/UpdateUser_study_open_historyArgs";
import { UpsertUser_study_open_historyArgs } from "./args/UpsertUser_study_open_historyArgs";
import { User_study_open_history } from "../../../models/User_study_open_history";
import { AggregateUser_study_open_history } from "../../outputs/AggregateUser_study_open_history";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => User_study_open_history)
export class User_study_open_historyCrudResolver {
  @TypeGraphQL.Query(_returns => User_study_open_history, {
    nullable: true,
    description: undefined
  })
  async user_study_open_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneUser_study_open_historyArgs): Promise<User_study_open_history | undefined> {
    return ctx.prisma.user_study_open_history.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [User_study_open_history], {
    nullable: false,
    description: undefined
  })
  async user_study_open_histories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyUser_study_open_historyArgs): Promise<User_study_open_history[]> {
    return ctx.prisma.user_study_open_history.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => User_study_open_history, {
    nullable: false,
    description: undefined
  })
  async createUser_study_open_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateUser_study_open_historyArgs): Promise<User_study_open_history> {
    return ctx.prisma.user_study_open_history.create(args);
  }

  @TypeGraphQL.Mutation(_returns => User_study_open_history, {
    nullable: true,
    description: undefined
  })
  async deleteUser_study_open_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteUser_study_open_historyArgs): Promise<User_study_open_history | undefined> {
    return ctx.prisma.user_study_open_history.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => User_study_open_history, {
    nullable: true,
    description: undefined
  })
  async updateUser_study_open_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateUser_study_open_historyArgs): Promise<User_study_open_history | undefined> {
    return ctx.prisma.user_study_open_history.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyUser_study_open_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyUser_study_open_historyArgs): Promise<BatchPayload> {
    return ctx.prisma.user_study_open_history.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyUser_study_open_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyUser_study_open_historyArgs): Promise<BatchPayload> {
    return ctx.prisma.user_study_open_history.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => User_study_open_history, {
    nullable: false,
    description: undefined
  })
  async upsertUser_study_open_history(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertUser_study_open_historyArgs): Promise<User_study_open_history> {
    return ctx.prisma.user_study_open_history.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateUser_study_open_history, {
    nullable: false,
    description: undefined
  })
  async aggregateUser_study_open_history(@TypeGraphQL.Args() args: AggregateUser_study_open_historyArgs): Promise<AggregateUser_study_open_history> {
    return new AggregateUser_study_open_history();
  }
}
