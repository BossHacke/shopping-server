import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { LikesModule } from './likes/likes.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { MenusModule } from './menus/menus.module';
import { MenuItemModule } from './menu_item/menu_item.module';
import { MenuItemOptionModule } from './menu_item_option/menu_item_option.module';
import { OrderDetailModule } from './order_detail/order_detail.module';
import { OrderModule } from './order/order.module';
import { ReviewsModule } from './reviews/reviews.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      exclude: ['/(.*)'],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    LikesModule,
    RestaurantModule,
    MenusModule,
    MenuItemModule,
    MenuItemOptionModule,
    OrderDetailModule,
    OrderModule,
    ReviewsModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
