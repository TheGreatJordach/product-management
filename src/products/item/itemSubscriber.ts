import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  UpdateEvent,
  RemoveEvent,
} from 'typeorm';
import { Item } from 'src/products/item/entities/item.entity';
import { Logger } from '@nestjs/common';

@EventSubscriber()
export class ItemSubscriber implements EntitySubscriberInterface<Item> {
  private readonly logger = new Logger(ItemSubscriber.name);

  listenTo() {
    return Item;
  }

  async afterInsert(event: InsertEvent<Item>) {
    this.logger.log(`Item inserted with ID: ${event.entity.id}`);
    // You can also perform additional actions here
  }

  async afterUpdate(event: UpdateEvent<Item>) {
    this.logger.log(`Item updated with ID: ${event.entity.id}`);
    // You can also perform additional actions here
  }

  async afterRemove(event: RemoveEvent<Item>) {
    this.logger.log(`Item removed with ID: ${event.entityId}`);
    // You can also perform additional actions here
  }
}
