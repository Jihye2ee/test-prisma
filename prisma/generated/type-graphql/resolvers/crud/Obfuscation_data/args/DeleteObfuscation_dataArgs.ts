import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Obfuscation_dataWhereUniqueInput } from "../../../inputs/Obfuscation_dataWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteObfuscation_dataArgs {
  @TypeGraphQL.Field(_type => Obfuscation_dataWhereUniqueInput, { nullable: false })
  where!: Obfuscation_dataWhereUniqueInput;
}
