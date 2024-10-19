import { Module } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantController } from './restaurant.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Restaurant, RestaurantSchemas } from './schemas/restaurant.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Restaurant.name, schema: RestaurantSchemas }])],
  controllers: [RestaurantController],
  providers: [RestaurantService]
})
export class RestaurantModule { }
