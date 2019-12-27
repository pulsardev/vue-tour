export const DEFAULT_CALLBACKS = {
  onStart: () => {},
  onPreviousStep: (currentStep) => {},
  onNextStep: (currentStep) => {},
  onStop: () => {}
}

export const DEFAULT_OPTIONS = {
  highlight: false,
  labels: {
    buttonSkip: 'Skip tour',
    buttonPrevious: 'Previous',
    buttonNext: 'Next',
    buttonStop: 'Finish'
  },
  startTimeout: 0,
  useKeyboardNavigation: true
}

export const HIGHLIGHT = {
  TRANSITION: 'box-shadow 0s ease-in-out 0s'
}

export const DEFAULT_STEP_OPTIONS = {
  enableScrolling: true,
  highlight: DEFAULT_OPTIONS.highlight, // By default use the global tour setting
  modifiers: {
    arrow: {
      element: '.v-step__arrow'
    }
  },
  placement: 'bottom'
}

export const KEYS = {
  ARROW_RIGHT: 39,
  ARROW_LEFT: 37,
  ESCAPE: 27
}
