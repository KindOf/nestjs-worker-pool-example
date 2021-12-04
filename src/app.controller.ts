import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { WorkerPool } from './worker.pool';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly pool: WorkerPool,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/fib')
  getFib(): Promise<number> {
    return this.pool.fib(6);
  }
}
