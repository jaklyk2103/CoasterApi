import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoastersModule } from './coasters/coasters.module';
import { StoreModule } from './store/store.module';

@Module({
  imports: [CoastersModule, StoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
