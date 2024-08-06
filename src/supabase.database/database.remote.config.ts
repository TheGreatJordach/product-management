import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ItemSubscriber } from '../products/item/itemSubscriber';

export const InterfaceFirebase = {
  useFactory: (configService: ConfigService): TypeOrmModuleOptions => ({
    type: 'postgres',
    host: configService.getOrThrow('HOST'),
    port: configService.getOrThrow('PORT'),
    database: configService.getOrThrow('DB'),
    password: configService.getOrThrow('DB_PASSWORD'),
    username: configService.getOrThrow('USER'),
    logging: true,
    subscribers: [ItemSubscriber], // Register the subscriber here
  }),
  inject: [ConfigService],
};
