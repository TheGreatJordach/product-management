import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocalDatabaseModule } from './local.database/local.database.module';

@Module({
  imports: [LocalDatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
