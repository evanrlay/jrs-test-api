import {Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne} from "typeorm";
import {Jurisdictions} from "./jurisdictions"; 

@Entity()
export class Locations {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    streetAddress: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    postalCode: string;

    @ManyToOne(() => Jurisdictions, jurisdiction => jurisdiction.id)
    @JoinColumn({ name: 'jurisdictionId', referencedColumnName: 'id'})
    jurisdiction: Jurisdictions;
}

/*
CREATE TABLE IF NOT EXISTS locations (
    id INT  AUTO_INCREMENT NOT NULL,
    name  VARCHAR(250) NOT NULL,
    street_address  VARCHAR(250) NOT NULL,
    city  VARCHAR(250) NOT NULL,
    state_abbreviation  VARCHAR(5) NOT NULL,
    postal_code  VARCHAR(10) NOT NULL,
    PRIMARY KEY (id)
);
*/