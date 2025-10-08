import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Activity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sets: number;

  @Column()
  reps: number;

  @Column()
  weight: number;

  @Column()
  // Wait until i know the attributes of results to create the json
  results: JSON;
}
