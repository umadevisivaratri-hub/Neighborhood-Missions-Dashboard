interface RewardToastProps {
  message: string;
}

export function RewardToast({ message }: RewardToastProps) {
  return <div className="toast">{message}</div>;
}