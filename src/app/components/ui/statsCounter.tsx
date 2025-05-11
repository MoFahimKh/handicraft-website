'use client';

import { useCountUp } from '@/utils/animations';
import { cn } from '@/lib/utils';

interface StatsCounterProps {
  value: number;
  label: string;
  className?: string;
}

export function StatsCounter({ value, label, className }: StatsCounterProps) {
  const { count, ref } = useCountUp(value);

  return (
    <div
      ref={ref}
      className={cn('flex flex-col items-center justify-center p-6 text-center', className)}
    >
      <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-400 text-transparent bg-clip-text">
        {count}+
      </span>
      <span className="text-sm md:text-base text-muted-foreground mt-2">{label}</span>
    </div>
  );
}

interface StatsGridProps {
  stats: Array<{ label: string; value: number }>;
  className?: string;
}

export function StatsGrid({ stats, className }: StatsGridProps) {
  return (
    <div
      className={cn('grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mx-auto max-w-7xl', className)}
    >
      {stats.map((stat, index) => (
        <StatsCounter
          key={index}
          value={stat.value}
          label={stat.label}
          className="bg-black/5 backdrop-blur-sm rounded-lg border border-zinc-800"
        />
      ))}
    </div>
  );
}
