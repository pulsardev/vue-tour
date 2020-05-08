import './vue';
import Vue from 'vue';

export function install (vue: typeof Vue): void

export interface Tour {
  // Methods
  start(startStep?: string): void
  previousStep(): void
  nextStep(): void
  stop(): void
  skip(): void
  finish(): void
  currentStep: number

  // Computed
  isRunning: boolean
  isFirst: boolean
  isLast: boolean
  numberOfSteps: number
}
