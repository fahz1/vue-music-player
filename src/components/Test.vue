<template>
  <div>
    <vue-p5 v-on="{ setup}"></vue-p5>

  </div>
</template>

<script>
import VueP5 from "vue-p5";
export default {
  name: "p5-example",
  components: {
    "vue-p5": VueP5
  },
return {
  data: () => ({
     xspacing: 16,
     w,
     theta: 0.0,
     amplitude: 75.0,
     period: 500.0,
     dx:null,
     yvalues: [],

     backgroundImage: null
   }),
}
  methods: {
    preload(sketch) {
      this.backgroundImage = sketch.loadImage("static/p5js.png");
    },
    setup(sketch) {
      sketch.createCanvas(1000, 400);
      // w = w + 16;
      dx = (TWO_PI / period) * xspacing;
      yvalues = new Array(floor(w / xspacing));
    },
    draw() {
      background(0);
      calcWave();
      renderWave();
    },

    calcWave() {
      theta += 0.02;
      let x = theta;
      for (let i = 0; i < yvalues.length; i++) {
        yvalues[i] = sin(x) * amplitude;
        x += dx;
      }
    },

  renderWave() {
    noStroke();
    fill(255);
    for (let x = 0; x < yvalues.length; x++) {
      ellipse(x * xspacing, height / 2 + yvalues[x], 16, 16);
    }
  }

  }
};
</script>
