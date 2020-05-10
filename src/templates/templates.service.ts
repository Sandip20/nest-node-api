import { Injectable } from '@nestjs/common';
import { Template } from './interfaces/template.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TemplatesService {
    constructor(@InjectModel('Template') private templateModel:Model<Template>){
    }
    getTemplates():Promise<Template[]>{
        return this.templateModel.find().exec()
    }
}
