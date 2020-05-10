  
import { Document } from 'mongoose';
export interface Deployment extends Document{
    url:string
    name:string
    version:string,
    deployedAt:Date
}