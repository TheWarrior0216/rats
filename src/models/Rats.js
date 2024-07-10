import { Schema } from "mongoose";

export const RatsSchema = new Schema({
  name: { type: String, minLength: 1, maxLength: 100, required: true, default: 'GusGus' },
  callsign: { type: String, minLength: 1, maxLength: 100, required: true, default: 'GusGus' },
  picture: { type: String, minlength: 1, maxLength: 200, required: true, },
  specialties: [{ type: String, minlength: 1, maxLength: 200, default: 'cooking' }]
},
  { timestamps: true, toJSON: { virtuals: true } })