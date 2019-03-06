<!-- <template>
   <div v-anime="{ rotate: '1turn',
   backgroundColor: '#FFF',
   duration: 2000,
   loop: true }">

  </div>
</template>

<script>
import {VueAnime} from 'vue-anime'
// Vue.use(VueAnime)

export default {
  name: "my-component",
  data() {
    return {};
  },

  mounted (){
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

</script> -->
