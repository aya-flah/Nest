import { Injectable, HttpStatus, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsageReport } from './schemas/usage-report.schema';
import { CreateUsageReportDto } from './dto/create-usage-report.dto';

@Injectable()
export class UsageReportsService {
  constructor(
    @InjectModel(UsageReport.name) 
    private model: Model<UsageReport>
  ) {
    console.log('✅ UsageReportsService initialized');
  }

  async create(dto: CreateUsageReportDto) {
    try {
      console.log('📝 Creating usage report:', dto);
      const created = await this.model.create(dto);
      console.log('✅ Usage report created:', created._id);
      
      return {
        statusCode: HttpStatus.CREATED,
        message: 'Rapport de consommation créé avec succès',
        data: created,
      };
    } catch (error) {
      console.error('❌ Error creating usage report:', error);
      throw new InternalServerErrorException({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: "Erreur lors de la création",
        error: error.message,
      });
    }
  }

  async findAll() {
    try {
      console.log('📖 Fetching all usage reports');
      const data = await this.model
        .find()
        .populate('capturePointId')
        .exec();
      console.log(`✅ Found ${data.length} usage reports`);
      
      return {
        statusCode: HttpStatus.OK,
        message: 'Rapports récupérés avec succès',
        data,
      };
    } catch (error) {
      console.error('❌ Error fetching usage reports:', error);
      throw new InternalServerErrorException({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Problème au niveau du serveur',
      });
    }
  }

  async getTotalUsageByPoint(capturePointId: string): Promise<number> {
    console.log(`📊 Calculating total usage for point: ${capturePointId}`);
    const reports = await this.model
      .find({ capturePointId, status: 'active' })
      .exec();
    
    const total = reports.reduce((sum, report) => sum + report.amount, 0);
    console.log(`✅ Total usage: ${total}`);
    return total;
  }
}