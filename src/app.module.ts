import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import {LoggerMiddleware} from './logger/logger.middleware';
import {CatsController} from './cats/cats.controller';
import {APP_FILTER} from '@nestjs/core';
import {HttpExceptionFilter} from './exception-filter/http-exception.filter';
import {ThingController} from './things/things-controller';
import {ThingService} from './things/things-service';

@Module({
  imports: [CatsModule],
  controllers: [AppController, ThingController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    AppService, ThingService],
})
export class AppModule  implements NestModule  {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      // .forRoutes({ path: 'cats', method: RequestMethod.GET });
      // .exclude(
      //   { path: 'cats', method: RequestMethod.GET },
      //   { path: 'cats', method: RequestMethod.POST },
      //   'cats/(.*)',
      // )
      .forRoutes(CatsController);
  }
}
