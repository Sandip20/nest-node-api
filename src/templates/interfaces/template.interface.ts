import { Document } from 'mongoose';
export interface Template extends Document{
    name: string
    versions: string[]
}