import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
  UseFilters,
  Param,
  ParseIntPipe,
  ValidationPipe,
  Redirect,
  HttpCode,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { Cat, CreateCatDto } from './cat-dto';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from 'src/exception-filter/http-exception.filter';
import {of} from 'rxjs';

@Controller('cats')
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  // @HttpCode(204)
  // @Header('Cache-Control', 'none')
  // can return observables
  async create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
    console.log('CC1', );
    this.catsService.create(createCatDto)
    //.pipe();

    return of([]);
  }

  @Get('library-specific')
  findAll2(@Body() body, @Res({ passthrough: true }) res: Response) {
     res.status(HttpStatus.OK).json([body]);
     // .json([body]); // uncomment if passthorugh false
     // otherwise error - can not set headers after they are send to the client
     return 12;
  }

  @Get(':id')
  async findOne(
    @Param(
      'id',
      ParseIntPipe
    )
    id: number,
  ) {
    return this.catsService.findOne(id);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    try {
      return await this.catsService.findAll();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }
}

// // TODO: what if I create 2 controllers? 
// // The order of how you provide controllers matters: if you provide controllers with the same path,
// // then the first provided will be activated, if it returns a response, req-res lifecycle will end and second controller will be ignored
// // if you would like to pass execution to the second controller / route - use @Redirect
// @Controller('cats')
// @UseFilters(HttpExceptionFilter)
// export class CatsController2 {
//   constructor(private catsService: CatsService) {}

//   @Post()
//   @Redirect('cats')
//   async create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
//     console.log('CC2', );
//     this.catsService.create(createCatDto);
//   }

//   @Get(':id')
//   async findOne(
//     @Param(
//       'id',
//       ParseIntPipe
//     )
//     id: number,
//   ) {
//     return this.catsService.findOne(id);
//   }

//   @Get()
//   async findAll(): Promise<Cat[]> {
//     try {
//       return await this.catsService.findAll();
//     } catch (error) {
//       throw new HttpException(
//         {
//           status: HttpStatus.FORBIDDEN,
//           error: 'This is a custom message',
//         },
//         HttpStatus.FORBIDDEN,
//         {
//           cause: error,
//         },
//       );
//     }
//   }
// }