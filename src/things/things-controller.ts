import {Controller} from '@nestjs/common';
import {EntityController} from 'src/helper/entity-controller';
import {Thing} from './thing';
import {ThingService} from './things-service';

@Controller('things')
export class ThingController extends EntityController<Thing> {
    constructor(private readonly thingService: ThingService<Thing>) { super(thingService) }
}