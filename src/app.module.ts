import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseLocalModule } from './local.database/database.local.module';
import { ConfigModule } from '@nestjs/config';
import { SupabaseDatabaseModule } from './supabase.database/supabase.database.module';
import { DatabaseLoggerService } from './app-logger/database-logger.service';
import { AppLoggerModule } from './app-logger/app-logger.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseLocalModule,
    SupabaseDatabaseModule,
    AppLoggerModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService, DatabaseLoggerService],
})
export class AppModule {}
