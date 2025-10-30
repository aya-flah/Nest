import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WaterSourceType } from './schemas/water-source-type.schema';
import { CreateWaterSourceTypeDto } from './dto/create-water-source-type.dto';

@Injectable()
export class WaterSourceTypesService {
  constructor(
    @InjectModel(WaterSourceType.name) 
    private model: Model<WaterSourceType>
  ) {}

  async create(dto: CreateWaterSourceTypeDto) {
    try {
      const created = await this.model.create(dto);
      return {
        statusCode: HttpStatus.CREATED,
        message: 'Type de source créé avec succès',
        data: created,
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Chaîne de caractères non vides',
        error: error.message,
      };
    }
  }

  async findAll() {
    try {
      const data = await this.model.find().exec();
      return {
        statusCode: HttpStatus.OK,
        message: 'Types de sources récupérés avec succès',
        data,
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Problème au niveau du serveur',
      };
    }
  }
}
