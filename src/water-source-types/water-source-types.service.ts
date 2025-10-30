import { Injectable, HttpStatus, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WaterSourceType } from './schemas/water-source-type.schema';
import { CreateWaterSourceTypeDto } from './dto/create-water-source-type.dto';

@Injectable()
export class WaterSourceTypesService {
  constructor(
    @InjectModel(WaterSourceType.name) 
    private model: Model<WaterSourceType>
  ) {
    // Log when service is initialized
    console.log('✅ WaterSourceTypesService initialized');
  }

  async create(dto: CreateWaterSourceTypeDto) {
    try {
      console.log('📝 Creating water source type:', dto);
      const created = await this.model.create(dto);
      console.log('✅ Water source type created:', created._id);
      
      return {
        statusCode: HttpStatus.CREATED,
        message: 'Type de source créé avec succès',
        data: created,
      };
    } catch (error) {
      console.error('❌ Error creating water source type:', error);
      throw new InternalServerErrorException({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Erreur lors de la création',
        error: error.message,
      });
    }
  }

  async findAll() {
    try {
      console.log('📖 Fetching all water source types');
      const data = await this.model.find().exec();
      console.log(`✅ Found ${data.length} water source types`);
      
      return {
        statusCode: HttpStatus.OK,
        message: 'Types de sources récupérés avec succès',
        data,
      };
    } catch (error) {
      console.error('❌ Error fetching water source types:', error);
      throw new InternalServerErrorException({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Problème au niveau du serveur',
      });
    }
  }
}