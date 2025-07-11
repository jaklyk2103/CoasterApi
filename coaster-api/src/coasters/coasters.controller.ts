import { Body, Controller, Post } from '@nestjs/common';
import { CoastersService } from './coasters.service';
import { CreateCoasterDto } from './dto/create-coaster.dto';

@Controller('coasters')
export class CoastersController {
  constructor(private readonly coastersService: CoastersService) {}

  @Post()
  createCoaster(@Body() createCoasterDto: CreateCoasterDto): Promise<void> {
    return this.coastersService.createCoaster(createCoasterDto);
  }
}
