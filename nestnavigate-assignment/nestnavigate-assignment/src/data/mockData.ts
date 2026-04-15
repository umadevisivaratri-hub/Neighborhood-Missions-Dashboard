import type { Mission, NeighborhoodUnlock, UserProfile } from "../types";

export const mockUser: UserProfile = {
  name: "Vinnu",
  coins: 200,
  streakDays: 2,
  lessonsCompleted: 1,
  neighborhoodLevel: 1,
};

export const mockMissions: Mission[] = [
  {
    id: "mission-lesson-1",
    title: "Finish 1 lesson today",
    description: "Complete one lesson module to keep your learning momentum going.",
    category: "lesson",
    rewardCoins: 20,
    progress: 0,
    goal: 1,
    type: "daily",
    status: "active",
  },
  {
    id: "mission-minigame-1",
    title: "Answer 3 Grow Your Nest questions",
    description: "Play the unlocked minigame and answer three question cards.",
    category: "minigame",
    rewardCoins: 15,
    progress: 0,
    goal: 3,
    type: "daily",
    status: "active",
  },
  {
    id: "mission-streak-1",
    title: "Maintain a 3-day learning streak",
    description: "Return daily and complete at least one learning activity.",
    category: "streak",
    rewardCoins: 40,
    progress: 2,
    goal: 3,
    type: "weekly",
    status: "active",
  },
  {
    id: "mission-explore-1",
    title: "Explore the Rewards Shop",
    description: "Visit the rewards shop to discover what coins can unlock.",
    category: "exploration",
    rewardCoins: 10,
    progress: 0,
    goal: 1,
    type: "daily",
    status: "active",
  },
];

export const neighborhoodUnlocks: NeighborhoodUnlock[] = [
  {
    level: 1,
    title: "Community Garden",
    description: "Unlock a garden that reflects consistent learning progress.",
    requiredPoints: 20,
  },
  {
    level: 2,
    title: "Front Porch Upgrade",
    description: "Upgrade the home appearance after completing missions.",
    requiredPoints: 50,
  },
  {
    level: 3,
    title: "Neighborhood Banner",
    description: "Celebrate your learning streak with a community banner.",
    requiredPoints: 90,
  },
];