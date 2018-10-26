export const DEFAULT_CALLBACKS = {
  onStart: () => {},
  onPreviousStep: (currentStep) => {},
  onNextStep: (currentStep) => {},
  onStop: () => {}
}

export const DEFAULT_OPTIONS = {
  useKeyboardNavigation: true,
  startTimeout: 0,
  highlight: false,
  labels: {
    buttonSkip: 'Skip tour',
    buttonPrevious: 'Previous',
    buttonNext: 'Next',
    buttonStop: 'Finish'
  }
}

export const HIGHLIGHT = {
  ACTIVE_STEP: 'v-tour-highlight',
  ACTIVE_TOUR: 'v-tour-active',
  POSITION_CLASS: 'v-tour-position',
  TRANSITION: ', box-shadow 0s ease-in-out 0s',
  POSITIONS: ['absolute', 'relative', 'fixed', 'sticky']
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
