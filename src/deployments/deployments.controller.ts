import { Controller, Get, Post, Body, Delete, Param, UsePipes, ValidationPipe, NotFoundException } from '@nestjs/common';
import { DeploymentsService } from './deployments.service';
import { CreateDeploymentDto } from './dto/create-deployment.dto';
import { Deployment } from './interfaces/deployment.interface';

@Controller('deployments')
export class DeploymentsController {
    constructor(private deploymentsService: DeploymentsService) {
    }
    @Get()
    async findAll(): Promise<Deployment[]> {
        return this.deploymentsService.findAll();
    }
    @Get('/:id')
    async getDeploymentById(@Param('id') id: string): Promise<Deployment> {
      return this.deploymentsService.getDeploymentById(id)
    }
    @Delete('/:id')
    async deleteDeployment(
        @Param('id') id: string
    ) {
        return this.deploymentsService.deleteDeploymentById(id).catch(()=>{
            throw new NotFoundException()
        });
    }
    @Post()
    @UsePipes(ValidationPipe)
    async    createDeployment(
        @Body() createDeploymentDto: CreateDeploymentDto
    ): Promise<Deployment> {
        return this.deploymentsService.createDeployment(createDeploymentDto)
    }
}
