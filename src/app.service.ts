import { Injectable } from '@nestjs/common';
import {FormDto} from "./dto";

@Injectable()
export class AppService {
  getHello(dto: FormDto): string {
    return `Thank you for your interest, ${dto.username}`;
  }
}
