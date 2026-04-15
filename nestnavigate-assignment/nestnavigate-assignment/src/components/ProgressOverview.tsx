import type { NeighborhoodUnlock } from "../types";

interface ProgressOverviewProps {
  totalMissionPoints: number;
  unlocks: NeighborhoodUnlock[];
}

export function ProgressOverview({
  totalMissionPoints,
  unlocks,
}: ProgressOverviewProps) {
  const nextUnlock = unlocks.find(
    (unlock) => totalMissionPoints < unlock.requiredPoints
  );

  return (
    <aside className="panel">
      <h2>Neighborhood Progress</h2>
      <p className="panel-copy">
        Mission points turn educational consistency into visible neighborhood
        rewards.
      </p>

      <div className="overview-box">
        <span>Total mission points</span>
        <strong>{totalMissionPoints}</strong>
      </div>

      {nextUnlock ? (
        <div className="overview-box">
          <span>Next unlock</span>
          <strong>{nextUnlock.title}</strong>
          <p>{nextUnlock.description}</p>
          <small>
            {nextUnlock.requiredPoints - totalMissionPoints} points remaining
          </small>
        </div>
      ) : (
        <div className="overview-box">
          <span>All unlocks earned</span>
          <strong>Neighborhood fully upgraded</strong>
        </div>
      )}

      <div className="unlock-list">
        {unlocks.map((unlock) => {
          const unlocked = totalMissionPoints >= unlock.requiredPoints;

          return (
            <div className="unlock-card" key={unlock.level}>
              <div className="unlock-header">
                <strong>{unlock.title}</strong>
                <span>{unlocked ? "Unlocked" : `At ${unlock.requiredPoints} pts`}</span>
              </div>
              <p>{unlock.description}</p>
            </div>
          );
        })}
      </div>
    </aside>
  );
}