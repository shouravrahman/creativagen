import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import React from 'react';


export const MOODS = [
  'Vibrant',
  'Dark',
  'Dreamy',
  'Dramatic',
  'Peaceful',
  'Energetic',
] as const;

interface MoodSelectorProps {
  selectedMood: typeof MOODS[number];
  onMoodSelect: (mood: typeof MOODS[number]) => void;
}

export function MoodSelector({ selectedMood, onMoodSelect }: MoodSelectorProps) {
  return (
    <div className="space-y-2">
        <Label >Mood</Label>
      <div className="grid grid-cols-2 gap-2">
        {MOODS.map((mood) => (
          <button
            key={mood}
            onClick={() => onMoodSelect(mood)}
            className={cn(
              "px-4 py-2 text-sm rounded-lg transition-colors",
              selectedMood === mood
                 ? "bg-primary text-foreground"
                 : "bg-card"
            )}
          >
            {mood}
          </button>
        ))}
      </div>
    </div>
  );
}
