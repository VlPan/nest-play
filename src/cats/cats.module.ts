import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import {CatsController} from './cats.controller';
import {CatsService} from './cats.service';
import {LoggerMiddleware} from 'src/logger/logger.middleware';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService]
})
export class CatsModule  implements NestModule  {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}
