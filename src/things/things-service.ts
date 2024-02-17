import { Injectable } from '@nestjs/common';
import {EntityService} from 'src/helper/entity-service';
import {Thing} from './thing';

@Injectable()
export class ThingService<Thing> implements EntityService<Thing> {
  async findAll() {
    console.log('Thing service find all');

    return [];
  }
  async getById(id) {
    console.log('Thing service get by id');

    return {};
  };


  async create(data: Partial<Thing>) {
    console.log('Thing service create');

    return {};
  }
}
