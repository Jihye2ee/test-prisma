import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Obfuscation_dataOrderByInput } from "../../../inputs/Obfuscation_dataOrderByInput";
import { Obfuscation_dataWhereInput } from "../../../inputs/Obfuscation_dataWhereInput";
import { Obfuscation_dataWhereUniqueInput } from "../../../inputs/Obfuscation_dataWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyObfuscation_dataArgs {
  @TypeGraphQL.Field(_type => Obfuscation_dataWhereInput, { nullable: true })
  where?: Obfuscation_dataWhereInput | undefined;

  @TypeGraphQL.Field(_type => Obfuscation_dataOrderByInput, { nullable: true })
  orderBy?: Obfuscation_dataOrderByInput | undefined;

  @TypeGraphQL.Field(_type => Obfuscation_dataWhereUniqueInput, { nullable: true })
  cursor?: Obfuscation_dataWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
