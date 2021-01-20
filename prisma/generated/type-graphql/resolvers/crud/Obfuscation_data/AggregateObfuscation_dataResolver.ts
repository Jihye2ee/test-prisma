import * as TypeGraphQL from "type-graphql";
import { AggregateObfuscation_dataArgs } from "./args/AggregateObfuscation_dataArgs";
import { Obfuscation_data } from "../../../models/Obfuscation_data";
import { AggregateObfuscation_data } from "../../outputs/AggregateObfuscation_data";

@TypeGraphQL.Resolver(_of => Obfuscation_data)
export class AggregateObfuscation_dataResolver {
  @TypeGraphQL.Query(_returns => AggregateObfuscation_data, {
    nullable: false,
    description: undefined
  })
  async aggregateObfuscation_data(@TypeGraphQL.Args() args: AggregateObfuscation_dataArgs): Promise<AggregateObfuscation_data> {
    return new AggregateObfuscation_data();
  }
}
