import VTour from '../components/VTour'
import VStep from '../components/VStep'

const VueTour = {
  install (Vue, options) {
    Vue.component(VTour.name, VTour)
    Vue.component(VStep.name, VStep)

    // 1. ajouter une méthode globale ou une propriété
    Vue.myGlobalMethod = function () {
      // de la logique de code...
    }

    // 2. ajouter une ressource globale
    Vue.directive('tour', {
      bind (el, binding, vnode, oldVnode) {
        // de la logique de code...
        console.log('tour', el)
      }
    })

    // 3. injecter des options de composant
    Vue.mixin({
      created: function () {
        // de la logique de code...
      }
    })

    // 4. ajouter une méthode d'instance
    Vue.prototype.$myMethod = function (methodOptions) {
      // de la logique de code...
    }

    // Object containing Tour objects (see VTour.vue) where the tour name is used as key
    Vue.prototype.$tours = {}
  }
}

export default VueTour
