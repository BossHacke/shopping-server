import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { MenuItem } from "src/menu_item/schemas/menu_item.entity";
import { MenuItemOption } from "src/menu_item_option/schemas/menu_item_option.entity";
import { Menu } from "src/menus/schemas/menu.entity";
import { Order } from "src/order/schemas/order.entity";

export type OrderDetailDocument = HydratedDocument<OrderDetail>;
@Schema({ timestamps: true })
export class OrderDetail {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Order.name })
    order: mongoose.Schema.Types.ObjectId;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Menu.name })
    menu: mongoose.Schema.Types.ObjectId;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: MenuItem.name })
    menuItem: mongoose.Schema.Types.ObjectId;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: MenuItemOption.name })
    menuItemOption: mongoose.Schema.Types.ObjectId;
}

export const OrderDetailSchema = SchemaFactory.createForClass(OrderDetail); 
