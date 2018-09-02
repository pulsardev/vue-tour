export const DEFAULT_CALLBACKS = {
  onStart: () => {},
  onPreviousStep: (currentStep) => {},
  onNextStep: (currentStep) => {},
  onStop: () => {}
}

export const DEFAULT_OPTIONS = {
  useKeyboardNavigation: true,
  startTimeout: 0,
  labels: {
    buttonSkip: 'Skip tour',
    buttonPrevious: 'Previous',
    buttonNext: 'Next',
    buttonStop: 'Finish'
  }
}

export const DEFAULT_STEP_OPTIONS = {
  placement: 'bottom',
  enableScrolling: true,
  modifiers: {
    arrow: {
      element: '.v-step__arrow'
    }
  }
}

export const KEYS = {
  ARROW_RIGHT: 39,
  ARROW_LEFT: 37,
  ESCAPE: 27
}
