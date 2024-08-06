import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class AbstractItemEntity<T> {
  @PrimaryGeneratedColumn()
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  // Optionally, define common methods that entities might share
  abstract getDetails(): T;

  // Constructor to handle partial updates
  constructor(newItem?: Partial<T>) {
    if (newItem) {
      Object.assign(this, newItem);
    }
  }
}
