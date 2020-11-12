import { LocationsController } from "../controller/LocationsController";

export const LocationRoutes = [{
    method: "get",
    route: "/locations",
    controller: LocationsController,
    action: "all"
}, {
    method: "get",
    route: "/locations/:id",
    controller: LocationsController,
    action: "one"
}, {
    method: "post",
    route: "/locations",
    controller: LocationsController,
    action: "save"
}, {
    method: "delete",
    route: "/locations/:id",
    controller: LocationsController,
    action: "remove"
}];