<template>
  <vue-anime ref="demo1" :animate="{
    translateX: 200
}" class="circle" :playing="false"></vue-anime>

</template>

<script>

import VueAnime from 'vue-animejs';
// export default {
//   name: "my-component",
//   components: {
//    “vue-anime”: VueAnime
//  },
import {VueAnime} from 'vue-anime'
import {VueAnimeGroup} from 'vue-anime'
import {VueAnimeTimeLine} from 'vue-anime'

export default {
  name: 'app',
  components: {
    VueAnime,
    VueAnimeGroup,
    VueAnimeTimeLine
  },
}


  methods: {
  mounted() {
    const targets = this.$el;
    this
      .$anime
      .timeline()
      .add({
        targets,
        translateX: 250,
        easing: 'easeOutExpo',
      })
      .add({
        targets,
        translateX: 250,
        easing: 'easeOutExpo',
      });
  },
}
</script>
