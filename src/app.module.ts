import { Module } from '@nestjs/common';
import { DeploymentsModule } from './deployments/deployments.module';

import { TemplatesModule } from './templates/templates.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import configuration from './config/configuration';
@Module({
  imports: [ConfigModule.forRoot({
    load:[configuration]
  }), DeploymentsModule, TemplatesModule,
    MongooseModule.forRootAsync(
      {
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
          uri:   configService.get<string>('MONGODB_URI') 
        }),
        inject: [ConfigService],
      })]
})
export class AppModule { }
