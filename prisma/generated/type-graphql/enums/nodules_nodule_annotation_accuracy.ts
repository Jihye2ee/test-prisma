import * as TypeGraphQL from "type-graphql";

export enum nodules_nodule_annotation_accuracy {
  TRUE_POSITIVE = "TRUE_POSITIVE",
  FALSE_POSITIVE = "FALSE_POSITIVE",
  FALSE_NEGATIVE = "FALSE_NEGATIVE",
  EMPTY_ENUM_VALUE = "EMPTY_ENUM_VALUE"
}
TypeGraphQL.registerEnumType(nodules_nodule_annotation_accuracy, {
  name: "nodules_nodule_annotation_accuracy",
  description: undefined,
});
