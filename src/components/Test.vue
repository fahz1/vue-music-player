<template>
  <div>
    <vue-p5

        @setup="setup"

    </vue-p5>
    <p>
      Red: {{ red }} <br/>
      Green: {{ green }} <br/>
      Blue: {{ blue }} <br/>
    </p>
    <p>
      Press <button @click="toggleRed()">button</button> to toggle red color <br/>
      Press <code>g</code> to toggle green color <br/>
      Use mouse to draw lines <br/>
    </p>
  </div>
</template>

<script>
import VueP5 from "vue-p5";
export default {
  name: "p5-example",
  data: () => ({
    red: 255,
    green: 0,
    blue: 0,
    backgroundImage: null
  }),
  methods: {

    setup(sketch) {
      sketch.createCanvas(400, 400);
    },

  }
};
</script>
