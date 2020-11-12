import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn} from "typeorm";
import {Users} from './users'

@Entity()
export class Jurisdictions {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    website: string;

    @OneToMany(() => Users, users => users.jurisdiction) 
    @JoinColumn({ name: 'userId', referencedColumnName: 'id'})
    inspectors: Users[];
}

/*
CREATE TABLE IF NOT EXISTS jurisdictions (
    id INT  AUTO_INCREMENT NOT NULL,
    name  VARCHAR(250) NOT NULL,
    website VARCHAR(250),
    PRIMARY KEY (id)
);
*/