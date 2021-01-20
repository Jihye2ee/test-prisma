import * as TypeGraphQL from "type-graphql";
import { AggregateNodule_registrationArgs } from "./args/AggregateNodule_registrationArgs";
import { CreateNodule_registrationArgs } from "./args/CreateNodule_registrationArgs";
import { DeleteManyNodule_registrationArgs } from "./args/DeleteManyNodule_registrationArgs";
import { DeleteNodule_registrationArgs } from "./args/DeleteNodule_registrationArgs";
import { FindManyNodule_registrationArgs } from "./args/FindManyNodule_registrationArgs";
import { FindOneNodule_registrationArgs } from "./args/FindOneNodule_registrationArgs";
import { UpdateManyNodule_registrationArgs } from "./args/UpdateManyNodule_registrationArgs";
import { UpdateNodule_registrationArgs } from "./args/UpdateNodule_registrationArgs";
import { UpsertNodule_registrationArgs } from "./args/UpsertNodule_registrationArgs";
import { Nodule_registration } from "../../../models/Nodule_registration";
import { AggregateNodule_registration } from "../../outputs/AggregateNodule_registration";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Nodule_registration)
export class Nodule_registrationCrudResolver {
  @TypeGraphQL.Query(_returns => Nodule_registration, {
    nullable: true,
    description: undefined
  })
  async nodule_registration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneNodule_registrationArgs): Promise<Nodule_registration | undefined> {
    return ctx.prisma.nodule_registration.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Nodule_registration], {
    nullable: false,
    description: undefined
  })
  async nodule_registrations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyNodule_registrationArgs): Promise<Nodule_registration[]> {
    return ctx.prisma.nodule_registration.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Nodule_registration, {
    nullable: false,
    description: undefined
  })
  async createNodule_registration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateNodule_registrationArgs): Promise<Nodule_registration> {
    return ctx.prisma.nodule_registration.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Nodule_registration, {
    nullable: true,
    description: undefined
  })
  async deleteNodule_registration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteNodule_registrationArgs): Promise<Nodule_registration | undefined> {
    return ctx.prisma.nodule_registration.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Nodule_registration, {
    nullable: true,
    description: undefined
  })
  async updateNodule_registration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateNodule_registrationArgs): Promise<Nodule_registration | undefined> {
    return ctx.prisma.nodule_registration.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyNodule_registration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyNodule_registrationArgs): Promise<BatchPayload> {
    return ctx.prisma.nodule_registration.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyNodule_registration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyNodule_registrationArgs): Promise<BatchPayload> {
    return ctx.prisma.nodule_registration.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Nodule_registration, {
    nullable: false,
    description: undefined
  })
  async upsertNodule_registration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertNodule_registrationArgs): Promise<Nodule_registration> {
    return ctx.prisma.nodule_registration.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateNodule_registration, {
    nullable: false,
    description: undefined
  })
  async aggregateNodule_registration(@TypeGraphQL.Args() args: AggregateNodule_registrationArgs): Promise<AggregateNodule_registration> {
    return new AggregateNodule_registration();
  }
}
