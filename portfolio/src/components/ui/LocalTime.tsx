import { useEffect, useState } from "react";

type LocalTimeProps = {
  timeZone: string;
  className?: string;
};

export function LocalTime({ timeZone, className = "" }: LocalTimeProps) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  const text = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone,
  }).format(now);

  return (
    <time className={`tabular-nums ${className}`} dateTime={now.toISOString()}>
      {text}
    </time>
  );
}
