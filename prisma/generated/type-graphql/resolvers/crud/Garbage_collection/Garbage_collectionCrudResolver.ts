import * as TypeGraphQL from "type-graphql";
import { AggregateGarbage_collectionArgs } from "./args/AggregateGarbage_collectionArgs";
import { CreateGarbage_collectionArgs } from "./args/CreateGarbage_collectionArgs";
import { DeleteGarbage_collectionArgs } from "./args/DeleteGarbage_collectionArgs";
import { DeleteManyGarbage_collectionArgs } from "./args/DeleteManyGarbage_collectionArgs";
import { FindManyGarbage_collectionArgs } from "./args/FindManyGarbage_collectionArgs";
import { FindOneGarbage_collectionArgs } from "./args/FindOneGarbage_collectionArgs";
import { UpdateGarbage_collectionArgs } from "./args/UpdateGarbage_collectionArgs";
import { UpdateManyGarbage_collectionArgs } from "./args/UpdateManyGarbage_collectionArgs";
import { UpsertGarbage_collectionArgs } from "./args/UpsertGarbage_collectionArgs";
import { Garbage_collection } from "../../../models/Garbage_collection";
import { AggregateGarbage_collection } from "../../outputs/AggregateGarbage_collection";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Garbage_collection)
export class Garbage_collectionCrudResolver {
  @TypeGraphQL.Query(_returns => Garbage_collection, {
    nullable: true,
    description: undefined
  })
  async garbage_collection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneGarbage_collectionArgs): Promise<Garbage_collection | undefined> {
    return ctx.prisma.garbage_collection.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Garbage_collection], {
    nullable: false,
    description: undefined
  })
  async garbage_collections(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyGarbage_collectionArgs): Promise<Garbage_collection[]> {
    return ctx.prisma.garbage_collection.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Garbage_collection, {
    nullable: false,
    description: undefined
  })
  async createGarbage_collection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateGarbage_collectionArgs): Promise<Garbage_collection> {
    return ctx.prisma.garbage_collection.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Garbage_collection, {
    nullable: true,
    description: undefined
  })
  async deleteGarbage_collection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteGarbage_collectionArgs): Promise<Garbage_collection | undefined> {
    return ctx.prisma.garbage_collection.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Garbage_collection, {
    nullable: true,
    description: undefined
  })
  async updateGarbage_collection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateGarbage_collectionArgs): Promise<Garbage_collection | undefined> {
    return ctx.prisma.garbage_collection.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyGarbage_collection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyGarbage_collectionArgs): Promise<BatchPayload> {
    return ctx.prisma.garbage_collection.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyGarbage_collection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyGarbage_collectionArgs): Promise<BatchPayload> {
    return ctx.prisma.garbage_collection.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Garbage_collection, {
    nullable: false,
    description: undefined
  })
  async upsertGarbage_collection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertGarbage_collectionArgs): Promise<Garbage_collection> {
    return ctx.prisma.garbage_collection.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateGarbage_collection, {
    nullable: false,
    description: undefined
  })
  async aggregateGarbage_collection(@TypeGraphQL.Args() args: AggregateGarbage_collectionArgs): Promise<AggregateGarbage_collection> {
    return new AggregateGarbage_collection();
  }
}
