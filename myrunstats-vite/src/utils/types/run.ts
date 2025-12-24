export interface RunData { // Defines the structure of a running activity
  id: string; // Unique identifier for the run
  date: string; // Date of the run in ISO format (YYYY-MM-DD)
  distanceKm: number; // Distance in kilometers
  durationMinutes: number; // Duration in minutes
  caloriesKcal: number; // Calories burned in kcal
  paceMinPerKm: string; // Pace in min/km format (e.g., "5:30")
} 