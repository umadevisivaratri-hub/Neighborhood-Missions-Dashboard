interface HeaderProps {
  coins: number;
  streakDays: number;
  completedCount: number;
}

export function Header({ coins, streakDays, completedCount }: HeaderProps) {
  return (
    <header className="hero">
      <div className="hero-copy">
        <p className="eyebrow">NestNavigate Prototype</p>
        <h1>Neighborhood Missions</h1>
        <p className="subtitle">
          A daily mission system that turns learning progress into visible
          neighborhood momentum.
        </p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span>Coins</span>
          <strong>{coins}</strong>
        </div>

        <div className="stat-card">
          <span>Streak</span>
          <strong>{streakDays} days</strong>
        </div>

        <div className="stat-card">
          <span>Completed Missions</span>
          <strong>{completedCount}</strong>
        </div>
      </div>
    </header>
  );
}