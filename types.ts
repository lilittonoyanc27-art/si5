/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface VerbConjugation {
  subject: string;
  armenian: string;
  form: string;
}

export interface GrammaticalConstruction {
  id: string;
  name: string;
  spanName: string;
  color: string; // Tailwind class color like 'emerald', 'indigo'
  meaning: string;
  armenianMeaning: string;
  conjugations?: VerbConjugation[];
  explanation: string;
  examples: Array<{
    spanish: string;
    armenian: string;
    literal?: string;
    explanation?: string;
  }>;
  irregularTip?: string;
}

export interface QuizQuestion {
  id: string;
  type: 'multiple-choice' | 'conjugation' | 'reorder' | 'spot-mistake' | 'dialogue';
  questionArm: string;
  questionContext?: string;
  options: string[];
  correctAnswer: string; // For MCQ: the exact string or index. For reorder: space-separated words.
  explanationArm: string;
  hintArm?: string;
}

export interface GameConfig {
  id: number;
  title: string;
  description: string;
  emoji: string;
  color: string;
  questions: QuizQuestion[];
}

export interface UserStats {
  points: number;
  streak: number;
  completedGames: number[]; // game IDs
  masteredPhrases: string[];
  heartCount: number;
}
