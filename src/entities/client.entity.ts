import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("clients")
class Client {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    full_name: string

    @Column({ unique: true })
    email: string

    @Column()
    
}