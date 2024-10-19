import { Module } from '@nestjs/common';
import { MenuItemOptionService } from './menu_item_option.service';
import { MenuItemOptionController } from './menu_item_option.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MenuItemOption, MenuItemOptionSchema } from './schemas/menu_item_option.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: MenuItemOption.name, schema: MenuItemOptionSchema }])],
  controllers: [MenuItemOptionController],
  providers: [MenuItemOptionService]
})
export class MenuItemOptionModule { }
