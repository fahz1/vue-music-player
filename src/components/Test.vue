<template>
  <div>
    <!-- <vue-p5 v-on="{ setup, draw, keypressed }"></vue-p5> -->
    <p>
      <!-- Red: {{ red }} <br/>
      Green: {{ green }} <br/>
      Blue: {{ blue }} <br/> -->
      test component
    </p>
      <!-- <p>
      Press <button @click="toggleRed()">button</button> to toggle red color <br/>
      Press <code>g</code> to toggle green color <br/>
      Use mouse to draw lines <br/>
    </p> -->
  </div>
</template>

<script>
import VueP5 from "vue-p5";
export default {
  name: "p5-example",
  components: {
    "vue-p5": VueP5
  },
  data: () => ({
    red: 255,
    green: 0,
    blue: 0,
    lines: [],
    backgroundImage: null
  }),
  methods: {
    preload(sketch) {
      this.backgroundImage = sketch.loadImage("static/p5js.png");
    },
    setup(sketch) {
      sketch.createCanvas(400, 400);
    },
    sketch(sketch) {
      sketch.draw = () => {
        this.blue = (this.blue + 3) % 255;
        const { red, green, blue } = this;
        sketch.background(red, green, blue);
      };
    },
  }
};
</script>
