import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class DatabaseLoggerService implements OnModuleInit {
  private readonly logger = new Logger(DatabaseLoggerService.name);

  constructor(@InjectDataSource() private readonly dataSource: DataSource) {}

  async onModuleInit() {
    try {
      await this.dataSource.query('SELECT 1'); // Simple query to ensure the connection works
      this.logger.log('Database connection established successfully');
    } catch (error) {
      this.logger.error('Failed to connect to the database', error.stack);
    }
  }
}
