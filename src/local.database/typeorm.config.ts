import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const LocalConfiguration = {
  useFactory: (configService: ConfigService): TypeOrmModuleOptions => ({
    type: 'mysql',
    host: configService.get<string>('MYSQL_HOST'),
    port: configService.getOrThrow<number>('MYSQL_PORT'),
    username: configService.getOrThrow<string>('MYSQL_USERNAME'),
    password: configService.getOrThrow<string>('MYSQL_PASSWORD'),
    database: configService.getOrThrow<string>('MYSQL_DATABASE'),
    synchronize: configService.getOrThrow<boolean>('MYSQL_SYNC_DATABASE'),
    autoLoadEntities: configService.getOrThrow<boolean>('MYSQL_AUTO_ENTITIES'),
    logging: true,
  }),
  inject: [ConfigService],
};
