import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { NodulesOrderByInput } from "../../../inputs/NodulesOrderByInput";
import { NodulesWhereInput } from "../../../inputs/NodulesWhereInput";
import { NodulesWhereUniqueInput } from "../../../inputs/NodulesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateNodulesArgs {
  @TypeGraphQL.Field(_type => NodulesWhereInput, { nullable: true })
  where?: NodulesWhereInput | undefined;

  @TypeGraphQL.Field(_type => NodulesOrderByInput, { nullable: true })
  orderBy?: NodulesOrderByInput | undefined;

  @TypeGraphQL.Field(_type => NodulesWhereUniqueInput, { nullable: true })
  cursor?: NodulesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
