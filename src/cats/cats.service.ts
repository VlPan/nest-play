import { Injectable } from '@nestjs/common';
import {Cat} from './cat-dto';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id) {
    console.log('find one by id', id);
    return {};
    // this.cats.find(c => c.id === id);
  }
}
