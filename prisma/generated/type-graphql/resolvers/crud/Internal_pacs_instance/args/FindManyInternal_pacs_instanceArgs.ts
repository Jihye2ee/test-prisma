import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Internal_pacs_instanceOrderByInput } from "../../../inputs/Internal_pacs_instanceOrderByInput";
import { Internal_pacs_instanceWhereInput } from "../../../inputs/Internal_pacs_instanceWhereInput";
import { Internal_pacs_instanceWhereUniqueInput } from "../../../inputs/Internal_pacs_instanceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyInternal_pacs_instanceArgs {
  @TypeGraphQL.Field(_type => Internal_pacs_instanceWhereInput, { nullable: true })
  where?: Internal_pacs_instanceWhereInput | undefined;

  @TypeGraphQL.Field(_type => Internal_pacs_instanceOrderByInput, { nullable: true })
  orderBy?: Internal_pacs_instanceOrderByInput | undefined;

  @TypeGraphQL.Field(_type => Internal_pacs_instanceWhereUniqueInput, { nullable: true })
  cursor?: Internal_pacs_instanceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
