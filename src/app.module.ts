import { Module } from '@nestjs/common';
import {AppController} from "./app.controller";
import {CustomerSupportService} from "./customer-support/customer-support.service";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationOptions: {
        allowUnknown: true,
        abortEarly: false,
      },
      cache: true,
    }),
  ],
  controllers: [AppController],
  providers: [CustomerSupportService]})

export class AppModule {}
