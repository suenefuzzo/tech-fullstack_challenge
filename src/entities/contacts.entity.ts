import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne
} from "typeorm";
import Client from "./client.entity";

export enum ContactSocialCircle {
    DEFAULT = "Social Circle",
    FAMILY = "Family",
    FRIEND = "Friend",
    WORK = "Work",
    GYM = "Gym",
    SCHOOL = "School",
    OTHER = "Other"
}

@Entity("contacts")
class Contact {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ type: "varchar", length: 100 })
    full_name: string;

    @Column({ type: "varchar", length: 45, unique: true })
    email: string;

    @Column({ type: "varchar" })
    telephone: string;

    @Column({ type: "enum", enum: ContactSocialCircle, default:  ContactSocialCircle.DEFAULT })
    social_circle: ContactSocialCircle

    @CreateDateColumn({ type: "date" })
    createdAt?: string | Date;
  
    @UpdateDateColumn({ type: "date" })
    updatedAt?: string | Date;
  
    @DeleteDateColumn({ type: "date" })
    deletedAt?: string | Date;

    @ManyToOne(() => Client)
    client: Client
}

export default Contact


