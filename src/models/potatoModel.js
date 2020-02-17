import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const Model = mongoose.model('Potato', new Schema({
    name: {type: String, required: true},
    origin: {type: String, required: true}
}))