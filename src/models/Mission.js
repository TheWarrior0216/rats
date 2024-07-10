import { Schema } from "mongoose";

export const MissionSchema = new Schema({
  codename: { type: String, minLength: 1, maxLength: 1000, required: true, default: 'mirage' },
  objective: { type: String, minLength: 1, maxLength: 1000, required: true, default: 'mirage' },
  year: { type: String, minLength: 1, maxLength: 1000, required: true, default: '1000' },
  ratId: { type: Schema.ObjectId, required: true, ref: 'Rats' },
  locationId: { type: Schema.ObjectId, required: true, ref: 'Locations' },
  completed: { type: Boolean, required: true, default: false }
},
  { timestamps: true, toJSON: { virtuals: true } })

MissionSchema.virtual('rat', {
  localField: 'ratId',
  ref: 'Rats',
  foreignField: '_id',
  justOne: true
})

MissionSchema.virtual('location', {
  localField: 'locationId',
  ref: 'Locations',
  foreignField: '_id',
  justOne: true
})