import VTour from '../components/VTour'
import VStep from '../components/VStep'

const VueTour = {
  install (Vue, options) {
    Vue.component(VTour.name, VTour)
    Vue.component(VStep.name, VStep)
  }
}

export default VueTour
