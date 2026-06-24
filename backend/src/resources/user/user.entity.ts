import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ name: 'full_name' })
  fullName!: string;

  @Column({ unique: true, length: 14 })
  cpf!: string;

  @Column({ unique: true })
  email!: string;

  @Column({ name: 'favorite_color', length: 7 })
  favoriteColor!: string;

  @Column({ type: 'text', nullable: true })
  observations!: string | null;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;
}