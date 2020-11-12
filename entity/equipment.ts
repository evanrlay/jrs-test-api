import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne} from "typeorm";
import { EquipmentTypes } from "./equipment-type";
import { InsuranceCarriers } from "./insurance-carriers";
import { Locations } from "./locations";

@Entity()
export class Equipment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    manufacturer: string;

    @Column()
    installation_date: Date;

    @ManyToOne(() => EquipmentTypes, equipmentTypes => equipmentTypes.id)
    @JoinColumn({ name: 'equipmentTypeID', referencedColumnName: 'id'})
    equipmentTypes: EquipmentTypes;

    @ManyToOne(() => Locations, locations => locations.id)
    @JoinColumn({ name: 'locationId', referencedColumnName: 'id'})
    location: Locations;

    @ManyToOne(() => InsuranceCarriers, insuranceCarriers => insuranceCarriers.id)
    @JoinColumn({ name: 'insuranceCarrierId', referencedColumnName: 'id'})
    insuranceCarriers: InsuranceCarriers;
}

/*
CREATE TABLE IF NOT EXISTS equipment (
    id INT AUTO_INCREMENT NOT NULL,
    equipment_type_id  INT NOT NULL,
    manufacturer  VARCHAR(250) NOT NULL,
    installation_date  DATE NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (equipment_type_id) REFERENCES equipment_types(id)
);
*/