import {Controller, Post, Body} from '@nestjs/common';
import {CustomerSupportService} from "./customer-support/customer-support.service";

@Controller('customer-support')
export class AppController {
  constructor(private readonly customerSupportService: CustomerSupportService) {}


  @Post('chat')
  async handleChat(@Body() body: { message: string; threadId?: string }) {
    return this.customerSupportService.handleChat(body.message, body.threadId);
  }

  @Post('authorize-refund')
  async authorizeRefund(@Body() body: { threadId: string }) {
    return this.customerSupportService.authorizeRefund(body.threadId);
  }
}
