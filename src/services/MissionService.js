import { dbContext } from "../db/DbContext.js"

class MissionService {
  async getMissions() {
    const missions = await dbContext.Mission.find().populate('rat location', '-name -picture')
    return missions
  }
  async createMission(missionData) {
    const missions = await dbContext.Mission.create(missionData)
    await missions.populate('rat location', '-name -picture')
    return missions
  }

}
export const missionsService = new MissionService()