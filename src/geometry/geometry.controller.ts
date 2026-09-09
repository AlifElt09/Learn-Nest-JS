import { Controller } from '@nestjs/common';
import { GeometryService } from './geometry.service.js';
import { Body, Post } from '@nestjs/common';
import { CircleDto } from './dto/circle.dto.js';

@Controller('geometry')
export class GeometryController {
  constructor(private readonly geometryService: GeometryService) {}

  @Post("/circle")
  countAreaOfCircle(@Body() dto: CircleDto) {
    return this.geometryService.countCircleArea(dto);
  }
}
