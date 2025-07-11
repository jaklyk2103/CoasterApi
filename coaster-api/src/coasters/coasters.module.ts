import { Module } from '@nestjs/common';
import { CoastersService } from './coasters.service';
import { CoastersController } from './coasters.controller';
import { StoreModule } from 'src/store/store.module';

@Module({
  providers: [CoastersService],
  controllers: [CoastersController],
  imports: [StoreModule],
})
export class CoastersModule {}
