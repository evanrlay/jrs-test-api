import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn} from "typeorm";
import { Equipment } from "./equipment";

@Entity()
export class EquipmentTypes {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @OneToMany(() => Equipment, equipment => equipment.location) 
    @JoinColumn({ name: 'equipmentId', referencedColumnName: 'id'})
    equipmentofSameType: Equipment[];
}

/*
CREATE TABLE IF NOT EXISTS equipment_types (
    id INT AUTO_INCREMENT NOT NULL,
    description VARCHAR(250) NOT NULL,
    PRIMARY KEY (id)
);
*/