import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RouterModule } from 'nest-router';

@Module({
  imports: [MongooseModule.forRoot('', {}), RouterModule.forRoutes([])],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
