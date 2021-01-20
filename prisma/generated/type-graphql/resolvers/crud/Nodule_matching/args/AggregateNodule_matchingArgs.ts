import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Nodule_matchingOrderByInput } from "../../../inputs/Nodule_matchingOrderByInput";
import { Nodule_matchingWhereInput } from "../../../inputs/Nodule_matchingWhereInput";
import { Nodule_matchingWhereUniqueInput } from "../../../inputs/Nodule_matchingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateNodule_matchingArgs {
  @TypeGraphQL.Field(_type => Nodule_matchingWhereInput, { nullable: true })
  where?: Nodule_matchingWhereInput | undefined;

  @TypeGraphQL.Field(_type => Nodule_matchingOrderByInput, { nullable: true })
  orderBy?: Nodule_matchingOrderByInput | undefined;

  @TypeGraphQL.Field(_type => Nodule_matchingWhereUniqueInput, { nullable: true })
  cursor?: Nodule_matchingWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
