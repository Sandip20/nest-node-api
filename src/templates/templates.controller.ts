import { Controller, Get } from '@nestjs/common';
import { Template } from './interfaces/template.interface';
import { TemplatesService } from './templates.service';

@Controller('templates')
export class TemplatesController {
    constructor(private templateService: TemplatesService) {

    }
    @Get()
    getTemplates(): Promise<Template[]> {
        return this.templateService.getTemplates()
    }
}
