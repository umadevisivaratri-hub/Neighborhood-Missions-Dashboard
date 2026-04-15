import type { Mission } from "../types";

interface MissionCardProps {
  mission: Mission;
  onAdvance: (missionId: string) => void;
  onComplete: (missionId: string) => void;
}

export function MissionCard({
  mission,
  onAdvance,
  onComplete,
}: MissionCardProps) {
  const progressPercent = Math.min(
    100,
    Math.round((mission.progress / mission.goal) * 100)
  );

  const isCompleted = mission.status === "completed";
  const canClaimReward = mission.progress >= mission.goal && !isCompleted;

  return (
    <article className="mission-card">
      <div className="mission-top">
        <div>
          <div className="mission-pill-row">
            <span className="pill">{mission.type}</span>
            <span className="pill subtle">{mission.category}</span>
          </div>

          <h3>{mission.title}</h3>
          <p>{mission.description}</p>
        </div>

        <div className="reward-badge">+{mission.rewardCoins} coins</div>
      </div>

      <div className="meta-row">
        <span>
          Progress: {mission.progress}/{mission.goal}
        </span>
        <span>{progressPercent}%</span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="button-row">
        <button
          className="secondary-btn"
          onClick={() => onAdvance(mission.id)}
          disabled={isCompleted}
        >
          Simulate Progress
        </button>

        <button
          className="primary-btn"
          onClick={() => onComplete(mission.id)}
          disabled={!canClaimReward}
        >
          {isCompleted ? "Completed" : "Claim Reward"}
        </button>
      </div>
    </article>
  );
}