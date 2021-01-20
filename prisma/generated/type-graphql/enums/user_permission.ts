import * as TypeGraphQL from "type-graphql";

export enum user_permission {
  ADMINISTRATOR = "ADMINISTRATOR",
  PHYSICIAN = "PHYSICIAN",
  RESTRICTED_PHYSICIAN = "RESTRICTED_PHYSICIAN",
  EMPTY_ENUM_VALUE = "EMPTY_ENUM_VALUE"
}
TypeGraphQL.registerEnumType(user_permission, {
  name: "user_permission",
  description: undefined,
});
