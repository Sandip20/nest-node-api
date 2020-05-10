import *  as mongoose from 'mongoose'
export const DeploymentSchema = new mongoose.Schema({
    url: String,
    name: String,
    version:  String ,
    deployedAt: Date 
})

