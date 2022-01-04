import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

// icons
import {library} from '@fortawesome/fontawesome-svg-core';

import {faPlus,faMinus,faTrash,faCheck} from '@fortawesome/free-solid-svg-icons';

library.add(faPlus,faMinus,faTrash,faCheck)
// icons

Vue.config.productionTip = false

new Vue({

  render: h => h(App),

}).$mount('#app')
