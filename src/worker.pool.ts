import { Injectable } from '@nestjs/common';
import { resolve } from 'path';

import Piscina from 'piscina';

@Injectable()
export class WorkerPool {
  private pool: Piscina;
  constructor() {
    this.pool = new Piscina({
      filename: resolve(__dirname, 'workers/index.js'),
    });
  }

  public async fib(n: number): Promise<number> {
    return await this.pool.run(n, { name: 'fib' });
  }
}
