import { useEffect, useMemo, useRef, useState } from "react";
import { Header } from "./components/Header";
import { MissionCard } from "./components/MissionCard";
import { ProgressOverview } from "./components/ProgressOverview";
import { RewardToast } from "./components/RewardToast";
import { mockMissions, mockUser, neighborhoodUnlocks } from "./data/mockData";
import type { Mission } from "./types";

function App() {
  const [missions, setMissions] = useState<Mission[]>(mockMissions);
  const [coins, setCoins] = useState<number>(mockUser.coins);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimerRef = useRef<number | null>(null);

  const completedCount = useMemo(() => {
    return missions.filter((mission) => mission.status === "completed").length;
  }, [missions]);

  const totalMissionPoints = useMemo(() => {
    return missions.reduce((sum, mission) => {
      return mission.status === "completed" ? sum + mission.rewardCoins : sum;
    }, 0);
  }, [missions]);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current !== null) {
        window.clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  const showToast = (message: string) => {
    setToastMessage(message);

    if (toastTimerRef.current !== null) {
      window.clearTimeout(toastTimerRef.current);
    }

    toastTimerRef.current = window.setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleAdvanceMission = (missionId: string) => {
    setMissions((currentMissions) =>
      currentMissions.map((mission) => {
        if (mission.id !== missionId || mission.status === "completed") {
          return mission;
        }

        const nextProgress = Math.min(mission.goal, mission.progress + 1);

        return {
          ...mission,
          progress: nextProgress,
        };
      })
    );
  };

  const handleCompleteMission = (missionId: string) => {
    setMissions((currentMissions) =>
      currentMissions.map((mission) => {
        if (mission.id !== missionId || mission.status === "completed") {
          return mission;
        }

        if (mission.progress < mission.goal) {
          return mission;
        }

        setCoins((currentCoins) => currentCoins + mission.rewardCoins);
        showToast(`Reward claimed: +${mission.rewardCoins} coins`);

        return {
          ...mission,
          status: "completed",
        };
      })
    );
  };

  const dailyMissions = missions.filter((mission) => mission.type === "daily");
  const weeklyMissions = missions.filter((mission) => mission.type === "weekly");

  return (
    <div className="app-shell">
      <Header
        coins={coins}
        streakDays={mockUser.streakDays}
        completedCount={completedCount}
      />

      <main className="content-grid">
        <section className="panel">
          <h2>Daily Missions</h2>
          <p className="panel-copy">
            These missions reward educational actions that already exist in the
            platform.
          </p>

          <div className="mission-list">
            {dailyMissions.map((mission) => (
              <MissionCard
                key={mission.id}
                mission={mission}
                onAdvance={handleAdvanceMission}
                onComplete={handleCompleteMission}
              />
            ))}
          </div>

          <h2 className="section-title">Weekly Mission</h2>

          <div className="mission-list">
            {weeklyMissions.map((mission) => (
              <MissionCard
                key={mission.id}
                mission={mission}
                onAdvance={handleAdvanceMission}
                onComplete={handleCompleteMission}
              />
            ))}
          </div>
        </section>

        <ProgressOverview
          totalMissionPoints={totalMissionPoints}
          unlocks={neighborhoodUnlocks}
        />
      </main>

      {toastMessage && <RewardToast message={toastMessage} />}
    </div>
  );
}

export default App;