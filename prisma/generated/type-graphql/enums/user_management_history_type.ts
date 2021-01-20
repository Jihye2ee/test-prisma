import * as TypeGraphQL from "type-graphql";

export enum user_management_history_type {
  CREATION = "CREATION",
  DELETION = "DELETION",
  UPDATE = "UPDATE",
  PERMISSION_CHANGE = "PERMISSION_CHANGE",
  PASSWORD_LOCKED = "PASSWORD_LOCKED"
}
TypeGraphQL.registerEnumType(user_management_history_type, {
  name: "user_management_history_type",
  description: undefined,
});
