import VTour from './components/VTour.vue'
import VStep from './components/VStep.vue'

const VueTour = {
  install (app, options) {
    if (!options) {
      options = {}
    }

    app.component(VTour.name, VTour)
    app.component(VStep.name, VStep)

    app.config.globalProperties.$tours = {}
  }
}

export default VueTour
