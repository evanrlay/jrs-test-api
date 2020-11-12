import { UserTypesController } from "../controller/UserTypesController";

export const UserTypeRoutes = [{
    method: "get",
    route: "/user-types",
    controller: UserTypesController,
    action: "all"
}, {
    method: "get",
    route: "/user-types/:id",
    controller: UserTypesController,
    action: "one"
}, {
    method: "post",
    route: "/user-types",
    controller: UserTypesController,
    action: "save"
}, {
    method: "delete",
    route: "/user-types/:id",
    controller: UserTypesController,
    action: "remove"
}];