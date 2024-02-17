import {Body, Get, Param, Post} from '@nestjs/common';
import {EntityService} from './entity-service';

export abstract class EntityController<T> {
  constructor(protected readonly service: EntityService<T>) { }

  @Get()
  async findAll() {
      return this.service.findAll();
  }

  @Get(':id')
  async getById(@Param() params) {
      return this.service.getById(params.id);
  }

  @Post()
  async create(@Body() data: Partial<T>) {
      return this.service.create(data);
  }
}