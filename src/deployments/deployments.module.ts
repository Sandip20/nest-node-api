import { Module } from '@nestjs/common';
import { DeploymentsController } from './deployments.controller';
import { DeploymentsService } from './deployments.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DeploymentSchema } from './schemas/deployment.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Deployment', schema: DeploymentSchema }])],
  controllers: [DeploymentsController],
  providers: [DeploymentsService]
})
export class DeploymentsModule {}
