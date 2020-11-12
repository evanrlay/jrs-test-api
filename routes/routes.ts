import { EquipmentRoutes } from './equipment';
import { EquipmentTypeRoutes } from './equipment-types';
import { InsuranceCarrierRoutes } from './insurance-carriers';
import { JurisdictionRoutes } from './jurisdictions';
import { LocationRoutes } from './locations';
import { UserTypeRoutes } from './user-types';
import { UserRoutes } from './users';

export const AllRoutes = [
    ...EquipmentTypeRoutes,
    ...EquipmentRoutes,
    ...InsuranceCarrierRoutes,
    ...JurisdictionRoutes,
    ...LocationRoutes,
    ...UserRoutes,
    ...UserTypeRoutes,
];