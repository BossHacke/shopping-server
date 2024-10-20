import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenuItemOptionService } from './menu_item_option.service';
import { CreateMenuItemOptionDto } from './dto/create-menu_item_option.dto';
import { UpdateMenuItemOptionDto } from './dto/update-menu_item_option.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('menu-item-option')
@Controller('menu-item-option')
export class MenuItemOptionController {
  constructor(private readonly menuItemOptionService: MenuItemOptionService) {}

  @Post()
  create(@Body() createMenuItemOptionDto: CreateMenuItemOptionDto) {
    return this.menuItemOptionService.create(createMenuItemOptionDto);
  }

  @Get()
  findAll() {
    return this.menuItemOptionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuItemOptionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenuItemOptionDto: UpdateMenuItemOptionDto) {
    return this.menuItemOptionService.update(+id, updateMenuItemOptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuItemOptionService.remove(+id);
  }
}
