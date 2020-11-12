import { InsuranceCarriersController } from "../controller/InsuranceCarriersController";

export const InsuranceCarrierRoutes = [{
    method: "get",
    route: "/insurance-carriers",
    controller: InsuranceCarriersController,
    action: "all"
}, {
    method: "get",
    route: "/insurance-carriers/:id",
    controller: InsuranceCarriersController,
    action: "one"
}, {
    method: "post",
    route: "/insurance-carriers",
    controller: InsuranceCarriersController,
    action: "save"
}, {
    method: "delete",
    route: "/insurance-carriers/:id",
    controller: InsuranceCarriersController,
    action: "remove"
}];