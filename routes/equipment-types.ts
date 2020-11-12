import { EquipmentTypesController } from "../controller/EquipmentTypesController";

export const EquipmentTypeRoutes = [{
    method: "get",
    route: "/equipment-types",
    controller: EquipmentTypesController,
    action: "all"
}, {
    method: "get",
    route: "/equipment-types/:id",
    controller: EquipmentTypesController,
    action: "one"
}, {
    method: "post",
    route: "/equipment-types",
    controller: EquipmentTypesController,
    action: "save"
}, {
    method: "delete",
    route: "/equipment-types/:id",
    controller: EquipmentTypesController,
    action: "remove"
}];