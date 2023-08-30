import { AppService } from './app.service';
import { Controller, Post, Param } from '@nestjs/common';
//
@Controller()
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly appService: AppService) {}

  @Post(':name')
  async publishName(@Param() name: string): Promise<void> {
    return await this.appService.publishMessage(name);
  }
}
