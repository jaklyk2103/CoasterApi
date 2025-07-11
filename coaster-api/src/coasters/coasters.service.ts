import { Injectable } from '@nestjs/common';
import { StoreService } from 'src/store/store.service';
import { CreateCoasterDto } from './dto/create-coaster.dto';

@Injectable()
export class CoastersService {
  constructor(private readonly storeService: StoreService) {}

  async createCoaster(coasterData: CreateCoasterDto): Promise<void> {
    // Logic to create a coaster
    console.log('Creating coaster with data:', coasterData);

    // TODO save coaster in store
  }
}
