import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"

@Entity("clients")
class Client {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "varchar", length: 100 })
    full_name: string

    @Column({ type: "varchar", length: 45, unique: true })
    email: string

    @Column()
    telephone: string

    @CreateDateColumn({ type: "date" })
    createdAt?: string | Date;

    @UpdateDateColumn({ type: "date" })
    updatedAt?: string | Date;
  
    @DeleteDateColumn({ type: "date"})
    deletedAt?: string | Date;

}

export default Client