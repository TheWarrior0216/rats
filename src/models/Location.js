import { Schema } from "mongoose";


export const LocationSchema = new Schema({
  country: { type: String, minLength: 1, maxLength: 100, requried: true, default: 'USA' },
  area: { type: String, minLength: 1, maxLength: 100, requried: true, default: 'Boise' },
  labels: [{ type: String, minLength: 1, maxLength: 100, requried: true, default: 'Urban' }]
},
  { timestamps: true, toJSON: { virtuals: true } })