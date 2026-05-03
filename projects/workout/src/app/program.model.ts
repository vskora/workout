export interface Program {
    id: string;
    name: string;
    exercises: Exercise[];
}

export type Exercise = {
    id: string;
    rest: number;
    sets: number;
    details: ExerciseDetail;
    type: ExerciseType;
    reps?: number;
    duration?: number;
}

export interface BaseExercise {
    id: string;
    rest: number;
    sets: number;
    details: ExerciseDetail;
}

export interface ExerciseDetail {
    name: string;
    force?: string;
    level: string;
    mechanic?: string;
    equipment?: string;
    primaryMuscles: string[];
    secondaryMuscles: string[];
    instructions: string[];
    category: string;
    images: string[];
    id: string;
}

export type ExerciseType = 'reps' | 'time';

export interface ProgramPlayerStep {
    exercise?: Exercise;
    duration?: number;
}