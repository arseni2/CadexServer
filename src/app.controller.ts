import {Body, Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';
import {FormDto} from "./dto";

@Controller("api")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body() dto: FormDto): string {
    return this.appService.getHello(dto);
  }
}
