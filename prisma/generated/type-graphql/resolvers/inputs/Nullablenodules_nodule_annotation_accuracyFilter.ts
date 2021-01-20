import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../../../node_modules/@prisma/client";
import { nodules_nodule_annotation_accuracy } from "../../enums/nodules_nodule_annotation_accuracy";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class Nullablenodules_nodule_annotation_accuracyFilter {
  @TypeGraphQL.Field(_type => nodules_nodule_annotation_accuracy, {
    nullable: true,
    description: undefined
  })
  equals?: keyof typeof nodules_nodule_annotation_accuracy | undefined;

  @TypeGraphQL.Field(_type => nodules_nodule_annotation_accuracy, {
    nullable: true,
    description: undefined
  })
  not?: keyof typeof nodules_nodule_annotation_accuracy | undefined;

  @TypeGraphQL.Field(_type => [nodules_nodule_annotation_accuracy], {
    nullable: true,
    description: undefined
  })
  in?: Array<keyof typeof nodules_nodule_annotation_accuracy> | undefined;

  @TypeGraphQL.Field(_type => [nodules_nodule_annotation_accuracy], {
    nullable: true,
    description: undefined
  })
  notIn?: Array<keyof typeof nodules_nodule_annotation_accuracy> | undefined;
}
