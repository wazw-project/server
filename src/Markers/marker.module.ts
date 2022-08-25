/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MarkerSchema } from './marker.model';
import { MakerService } from './marker.service';
import { MarkerController } from './marker.controller';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Marker', schema: MarkerSchema}])],
  controllers: [MarkerController],
  providers: [MakerService],
})
export class MarkerModule {}
