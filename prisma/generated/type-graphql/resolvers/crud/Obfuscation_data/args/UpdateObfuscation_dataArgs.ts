import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Obfuscation_dataUpdateInput } from "../../../inputs/Obfuscation_dataUpdateInput";
import { Obfuscation_dataWhereUniqueInput } from "../../../inputs/Obfuscation_dataWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateObfuscation_dataArgs {
  @TypeGraphQL.Field(_type => Obfuscation_dataUpdateInput, { nullable: false })
  data!: Obfuscation_dataUpdateInput;

  @TypeGraphQL.Field(_type => Obfuscation_dataWhereUniqueInput, { nullable: false })
  where!: Obfuscation_dataWhereUniqueInput;
}
