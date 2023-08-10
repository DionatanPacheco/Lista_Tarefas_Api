import { Module } from '@nestjs/common';
import { ListasService } from './listas.service';
import { ListasController } from './listas.controller';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [ListasController],
  providers: [ListasService],
})
export class ListasModule {}
