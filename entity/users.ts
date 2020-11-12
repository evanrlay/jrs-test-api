import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne} from "typeorm";
import { Jurisdictions } from "./jurisdictions";
import {UserType} from "./user-type"; 

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @ManyToOne(() => UserType, userType => userType.id)
    @JoinColumn({ name: 'userTypeId', referencedColumnName: 'id'})
    userType: UserType;

    @ManyToOne(() => Jurisdictions, jurisdictions => jurisdictions.inspectors)
    @JoinColumn({ name: 'jurisdictionId', referencedColumnName: 'id'})
    jurisdiction: Jurisdictions;
}

/*
CREATE TABLE IF NOT EXISTS users (
    id INT  AUTO_INCREMENT NOT NULL,
    email VARCHAR(250) NOT NULL , 
    firstName  VARCHAR(50) NOT NULL,
    lastName  VARCHAR(50) NOT NULL,
    userTypeId INT NOT NULL, 
    password VARCHAR(100) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_type_id) REFERENCES user_types(id)
);
*/