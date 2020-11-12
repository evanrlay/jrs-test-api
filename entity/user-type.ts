import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class UserType {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;
}

/*
CREATE TABLE IF NOT EXISTS user_types (
    id INT AUTO_INCREMENT NOT NULL,
    description  VARCHAR(250) NOT NULL,
    PRIMARY KEY (id)
);
*/