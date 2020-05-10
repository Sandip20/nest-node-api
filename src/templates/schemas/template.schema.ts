import *  as mongoose from 'mongoose'
export const TemplateSchema = new mongoose.Schema({
    name: String,
    versions: [String]
})

