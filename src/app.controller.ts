import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {CatsService} from './cats/cats.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private cats: CatsService) {
    // setTimeout(() => {
    //   console.log(this.cats.findAll())
    // }, 20000)
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
