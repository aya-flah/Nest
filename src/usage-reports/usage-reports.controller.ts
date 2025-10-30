import { Controller, Get, Post, Body, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UsageReportsService } from './usage-reports.service';
import { CreateUsageReportDto } from './dto/create-usage-report.dto';
import { CapacityGuard } from '../guards/capacity.guard';

@ApiTags('usage-reports')
@Controller('usage-reports')
export class UsageReportsController {
  constructor(private readonly service: UsageReportsService) {}

  @Post()
  @UseGuards(CapacityGuard)
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Ajouter un rapport de consommation' })
  @ApiResponse({ status: 201, description: 'Rapport créé avec succès' })
  @ApiResponse({ status: 400, description: 'Contraintes non respectées ou ressource insuffisante' })
  @ApiResponse({ status: 500, description: 'Problème au niveau du serveur' })
  async create(@Body() dto: CreateUsageReportDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Récupérer les rapports' })
  @ApiResponse({ status: 200, description: 'Rapports récupérés avec succès' })
  @ApiResponse({ status: 500, description: 'Problème au niveau du serveur' })
  async findAll() {
    return this.service.findAll();
  }
}
