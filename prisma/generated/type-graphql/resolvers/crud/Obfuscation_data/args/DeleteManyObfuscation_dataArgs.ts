import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Obfuscation_dataWhereInput } from "../../../inputs/Obfuscation_dataWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyObfuscation_dataArgs {
  @TypeGraphQL.Field(_type => Obfuscation_dataWhereInput, { nullable: true })
  where?: Obfuscation_dataWhereInput | undefined;
}
