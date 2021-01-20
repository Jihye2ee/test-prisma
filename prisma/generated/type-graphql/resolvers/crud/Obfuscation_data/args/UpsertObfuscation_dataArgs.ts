import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Obfuscation_dataCreateInput } from "../../../inputs/Obfuscation_dataCreateInput";
import { Obfuscation_dataUpdateInput } from "../../../inputs/Obfuscation_dataUpdateInput";
import { Obfuscation_dataWhereUniqueInput } from "../../../inputs/Obfuscation_dataWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertObfuscation_dataArgs {
  @TypeGraphQL.Field(_type => Obfuscation_dataWhereUniqueInput, { nullable: false })
  where!: Obfuscation_dataWhereUniqueInput;

  @TypeGraphQL.Field(_type => Obfuscation_dataCreateInput, { nullable: false })
  create!: Obfuscation_dataCreateInput;

  @TypeGraphQL.Field(_type => Obfuscation_dataUpdateInput, { nullable: false })
  update!: Obfuscation_dataUpdateInput;
}
