import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { WaterSourceTypesService } from './water-source-types.service';
import { CreateWaterSourceTypeDto } from './dto/create-water-source-type.dto';

@ApiTags('source-types')
@Controller('source-types')
export class WaterSourceTypesController {
  constructor(private readonly service: WaterSourceTypesService) {}

  @Post()
  @ApiOperation({ summary: 'Ajouter un type de source' })
  @ApiResponse({ status: 201, description: 'Type de source créé avec succès' })
  @ApiResponse({ status: 400, description: 'Chaîne de caractères non vides' })
  @ApiResponse({ status: 500, description: 'Problème au niveau du serveur' })
  async create(@Body() dto: CreateWaterSourceTypeDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Récupérer tous les types de source' })
  @ApiResponse({ status: 200, description: 'Types de sources récupérés avec succès' })
  @ApiResponse({ status: 500, description: 'Problème au niveau du serveur' })
  async findAll() {
    return this.service.findAll();
  }
}