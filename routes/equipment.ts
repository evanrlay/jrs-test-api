import { EquipmentController } from "../controller/EquipmentController";

export const EquipmentRoutes = [{
    method: "get",
    route: "/equipment",
    controller: EquipmentController,
    action: "all"
}, {
    method: "get",
    route: "/equipment/:id",
    controller: EquipmentController,
    action: "one"
}, {
    method: "post",
    route: "/equipment",
    controller: EquipmentController,
    action: "save"
}, {
    method: "delete",
    route: "/equipment/:id",
    controller: EquipmentController,
    action: "remove"
}];