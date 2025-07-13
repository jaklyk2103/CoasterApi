import { Module } from '@nestjs/common';
import { CoastersService } from './coasters.service';
import { CoastersController } from './coasters.controller';
import { StoreModule } from '../store/store.module';
import { StoreService } from 'src/store/store.service';

@Module({
  providers: [CoastersService, StoreService],
  controllers: [CoastersController],
  imports: [StoreModule],
})
export class CoastersModule {}
