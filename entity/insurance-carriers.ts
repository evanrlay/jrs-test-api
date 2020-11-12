import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn} from "typeorm";
import { Equipment } from "./equipment";

@Entity()
export class InsuranceCarriers {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    website: string;
}

/*
CREATE TABLE IF NOT EXISTS insurance_carriers (
    id INT  AUTO_INCREMENT NOT NULL,
    name  VARCHAR(250) NOT NULL,
    website VARCHAR(250),
    PRIMARY KEY (id)
);
*/