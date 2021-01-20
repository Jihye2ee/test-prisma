import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Obfuscation_dataCreateInput } from "../../../inputs/Obfuscation_dataCreateInput";

@TypeGraphQL.ArgsType()
export class CreateObfuscation_dataArgs {
  @TypeGraphQL.Field(_type => Obfuscation_dataCreateInput, { nullable: false })
  data!: Obfuscation_dataCreateInput;
}
