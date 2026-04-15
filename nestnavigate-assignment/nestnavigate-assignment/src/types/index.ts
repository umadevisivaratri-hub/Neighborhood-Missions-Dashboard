export type MissionType = "daily" | "weekly";
export type MissionStatus = "locked" | "active" | "completed";

export interface Mission {
  id: string;
  title: string;
  description: string;
  category: "lesson" | "minigame" | "streak" | "exploration";
  rewardCoins: number;
  progress: number;
  goal: number;
  type: MissionType;
  status: MissionStatus;
}

export interface UserProfile {
  name: string;
  coins: number;
  streakDays: number;
  lessonsCompleted: number;
  neighborhoodLevel: number;
}

export interface NeighborhoodUnlock {
  level: number;
  title: string;
  description: string;
  requiredPoints: number;
}