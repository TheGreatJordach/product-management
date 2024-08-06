import { Entity, Column } from 'typeorm';
import { AbstractItemEntity } from './abstracts-item-entity'; // Adjust path as necessary

@Entity()
export class Item extends AbstractItemEntity<Item> {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  getDetails(): Item {
    return this; // This method can be customized as needed
  }
}
