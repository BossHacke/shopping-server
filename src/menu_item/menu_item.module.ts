import { Module } from '@nestjs/common';
import { MenuItemService } from './menu_item.service';
import { MenuItemController } from './menu_item.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MenuItem } from './schemas/menu_item.entity';
import { MenuSchema } from 'src/menus/schemas/menu.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: MenuItem.name, schema: MenuSchema }])],
  controllers: [MenuItemController],
  providers: [MenuItemService]
})
export class MenuItemModule { }
