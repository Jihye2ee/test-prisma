import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { NodulesWhereInput } from "../../../inputs/NodulesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyNodulesArgs {
  @TypeGraphQL.Field(_type => NodulesWhereInput, { nullable: true })
  where?: NodulesWhereInput | undefined;
}
