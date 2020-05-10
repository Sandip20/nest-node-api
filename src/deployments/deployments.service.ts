import { Injectable, NotFoundException } from '@nestjs/common';
import { Deployment } from './interfaces/deployment.interface';
import { CreateDeploymentDto } from './dto/create-deployment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DeploymentsService {
    private deployments: Deployment[] = [
    ];
    constructor(@InjectModel('Deployment') private deploymentModel:Model<Deployment>){

    }
    async findAll(): Promise<Deployment[]> {
        return this.deploymentModel.find().exec();
      }

    async createDeployment(createDeploymentDto:CreateDeploymentDto) :Promise<Deployment> {
        const {url,name,version}=createDeploymentDto
        const deployment={
            url,name,version,
            deployedAt:Date.now()
        }

        const createdDeployment= new this.deploymentModel(deployment)
        return createdDeployment.save();
       
    }
    async getDeploymentById(id:string):Promise<Deployment>{
        return this.deploymentModel.findById(id).catch(()=>{throw  new NotFoundException()})
    }
    async deleteDeploymentById (id:string):Promise<Deployment>{
        return this.deploymentModel.findByIdAndDelete(id)
    }
}
