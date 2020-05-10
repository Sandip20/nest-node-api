import { IsNotEmpty } from 'class-validator'

export class CreateDeploymentDto {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    url: string;
    @IsNotEmpty()
    version: string;
}