import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterfaceFirebase } from './database.remote.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.firebase',
    }),
    TypeOrmModule.forRootAsync(InterfaceFirebase),
  ],
})
export class SupabaseDatabaseModule {}
