
import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service.js';


@Controller('cats')
export class CatsController {
  @Get('cats')
  findAll(): string {
    return 'This action returns all cats';
  }
}
