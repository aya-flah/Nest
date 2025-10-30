import { Injectable, HttpStatus, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CapturePoint } from './schemas/capture-point.schema';
import { CreateCapturePointDto } from './dto/create-capture-point.dto';
import { UpdateCapturePointDto } from './dto/update-capture-point.dto';

@Injectable()
export class CapturePointsService {
  constructor(
    @InjectModel(CapturePoint.name) 
    private model: Model<CapturePoint>
  ) {
    console.log('✅ CapturePointsService initialized');
  }

  async create(dto: CreateCapturePointDto) {
    try {
      console.log('📝 Creating capture point:', dto);
      const created = await this.model.create(dto);
      console.log('✅ Capture point created:', created._id);
      
      return {
        statusCode: HttpStatus.CREATED,
        message: 'Point de captage créé avec succès',
        data: created,
      };
    } catch (error) {
      console.error('❌ Error creating capture point:', error);
      throw new InternalServerErrorException({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: "Erreur lors de la création",
        error: error.message,
      });
    }
  }

  async findAll() {
    try {
      console.log('📖 Fetching all capture points');
      const data = await this.model
        .find()
        .populate('sourceTypeId')
        .exec();
      console.log(`✅ Found ${data.length} capture points`);
      
      return {
        statusCode: HttpStatus.OK,
        message: 'Points de captage récupérés avec succès',
        data,
      };
    } catch (error) {
      console.error('❌ Error fetching capture points:', error);
      throw new InternalServerErrorException({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Problème au niveau du serveur',
      });
    }
  }

  async update(id: string, dto: UpdateCapturePointDto) {
    try {
      console.log(`📝 Updating capture point ${id}:`, dto);
      const updated = await this.model
        .findByIdAndUpdate(id, dto, { new: true })
        .exec();
      
      if (!updated) {
        throw new NotFoundException('Point de captage non trouvé');
      }

      console.log('✅ Capture point updated:', updated._id);
      return {
        statusCode: HttpStatus.OK,
        message: 'Point de captage modifié avec succès',
        data: updated,
      };
    } catch (error) {
      console.error('❌ Error updating capture point:', error);
      throw new InternalServerErrorException({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Problème au niveau du serveur',
      });
    }
  }

  async findOne(id: string) {
    console.log(`📖 Finding capture point: ${id}`);
    return this.model.findById(id).exec();
  }
}
