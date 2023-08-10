import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListasModule } from './listas/listas.module';
import { SharedModule } from './shared/shared.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [ListasModule, SharedModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
