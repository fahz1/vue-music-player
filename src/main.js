import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import VueAnime from 'vue-animejs'
import VueAnimeGroup from 'vue-animejs'
import VueAnimeTimeLine from 'vue-animejs'

import Player from './Player.vue'
// import anime from 'animejs';

import VueHowler from 'vue-howler'
import router from './router'
import {Howl, Howler} from 'howler'
import AudioVisual from 'vue-audio-visual'

Vue.use(AudioVisual)

Vue.use(Vuetify, {
  theme: {
    primary: '#004e92',
    secondary: '#FF00FF',
    accent: '#8c9eff',
    error: '#b71c1c',
    info: '#4B0082',

  }
})
Vue.use(VueAnime)

Vue.filter('numbers', (value) => {
  let number = value + 1
  if (number < 10) {
    return "0" + number + "."
  }
  return number + "."
})

Vue.filter('minutes', (value) => {
  if(!value || typeof value !== "number") return "00:00"
  let min = parseInt(value / 60),
      sec = parseInt(value % 60)
  min = min < 10 ? "0" + min : min
  sec = sec < 10 ? "0" + sec : sec
  value = min + ":" + sec
  return value
})




new Vue({
  el: '#app',
  router,
  render: h => h(Player)
})
