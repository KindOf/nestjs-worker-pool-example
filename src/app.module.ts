import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkerPool } from './worker.pool';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, WorkerPool],
})
export class AppModule {}
