import { Controller, Get, Post, Patch, Body, Param, HttpStatus, HttpCode } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { CapturePointsService } from './capture-points.service';
import { CreateCapturePointDto } from './dto/create-capture-point.dto';
import { UpdateCapturePointDto } from './dto/update-capture-point.dto';

@ApiTags('capture-points')
@Controller('capture-points')
export class CapturePointsController {
  constructor(private readonly service: CapturePointsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Ajouter un point de captage' })
  @ApiResponse({ status: 201, description: 'Point de captage créé avec succès' })
  @ApiResponse({ status: 400, description: "Si au moins l'une des contraintes n'est pas respecté" })
  @ApiResponse({ status: 500, description: 'Problème au niveau du serveur' })
  async create(@Body() dto: CreateCapturePointDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Récupérer les points de captage avec les types' })
  @ApiResponse({ status: 200, description: 'Points de captage récupérés avec succès' })
  @ApiResponse({ status: 500, description: 'Problème au niveau du serveur' })
  async findAll() {
    return this.service.findAll();
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Modifier un point de captage' })
  @ApiParam({ name: 'id', description: 'ID du point de captage' })
  @ApiResponse({ status: 200, description: 'Point de captage modifié avec succès' })
  @ApiResponse({ status: 500, description: 'Problème au niveau du serveur' })
  async update(@Param('id') id: string, @Body() dto: UpdateCapturePointDto) {
    return this.service.update(id, dto);
  }
}