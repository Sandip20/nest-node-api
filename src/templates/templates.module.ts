import { Module } from '@nestjs/common';
import { TemplatesController } from './templates.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {TemplateSchema} from './schemas/template.schema'
import { TemplatesService } from './templates.service';

@Module({
   controllers:[TemplatesController],
   imports: [MongooseModule.forFeature([{ name: 'Template', schema:TemplateSchema}])],
   providers: [TemplatesService]

})
export class TemplatesModule {}
