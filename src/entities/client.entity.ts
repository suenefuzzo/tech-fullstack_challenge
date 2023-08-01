import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToMany
} from "typeorm";
import { getRounds, hashSync } from "bcryptjs";
import Contact from "./contacts.entity";

@Entity("clients")
class Client {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 100 })
  full_name: string;

  @Column({ type: "varchar", length: 45, unique: true })
  email: string;

  @Column({ type: "varchar", length: 120 })
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isEncrypted: number = getRounds(this.password);

    if (!isEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }

  @Column({ type: "varchar" })
  telephone: string;

  @CreateDateColumn({ type: "date" })
  createdAt?: string | Date;

  @UpdateDateColumn({ type: "date" })
  updatedAt?: string | Date;

  @DeleteDateColumn({ type: "date" })
  deletedAt?: string | Date;

  @OneToMany(() => Contact, contact => contact.client)
  contacts: Contact[]
}

export default Client;
