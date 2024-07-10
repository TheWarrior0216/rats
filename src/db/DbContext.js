import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { RatsSchema } from "../models/Rats.js";
import { LocationSchema } from "../models/Location.js";
import { MissionSchema } from "../models/Mission.js";


class DbContext {
  Account = mongoose.model('Account', AccountSchema)
  Rats = mongoose.model('Rats', RatsSchema)
  Location = mongoose.model('Locations', LocationSchema)
  Mission = mongoose.model('Missions', MissionSchema)
}

export const dbContext = new DbContext()
