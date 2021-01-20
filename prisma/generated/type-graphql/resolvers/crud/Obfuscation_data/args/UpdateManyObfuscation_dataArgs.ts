import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Obfuscation_dataUpdateManyMutationInput } from "../../../inputs/Obfuscation_dataUpdateManyMutationInput";
import { Obfuscation_dataWhereInput } from "../../../inputs/Obfuscation_dataWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyObfuscation_dataArgs {
  @TypeGraphQL.Field(_type => Obfuscation_dataUpdateManyMutationInput, { nullable: false })
  data!: Obfuscation_dataUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Obfuscation_dataWhereInput, { nullable: true })
  where?: Obfuscation_dataWhereInput | undefined;
}
