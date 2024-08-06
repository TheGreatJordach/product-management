import { Module } from '@nestjs/common';
import { LocalConfiguration } from './typeorm.config';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.local',
    }),
    TypeOrmModule.forRootAsync(LocalConfiguration),
  ],
})
export class DatabaseLocalModule {}
