import { JurisdictionsController } from "../controller/JurisdictionsController";

export const JurisdictionRoutes = [{
    method: "get",
    route: "/jurisdictions",
    controller: JurisdictionsController,
    action: "all"
}, {
    method: "get",
    route: "/jurisdictions/:id",
    controller: JurisdictionsController,
    action: "one"
}, {
    method: "post",
    route: "/jurisdictions",
    controller: JurisdictionsController,
    action: "save"
}, {
    method: "delete",
    route: "/jurisdictions/:id",
    controller: JurisdictionsController,
    action: "remove"
}];