<template>
  <div>
    <vue-p5 v-on="{ setup, draw }"></vue-p5>

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
     xspacing: 16,
     w: 16*95,
     theta: 0.0,
     height: 20,
     amplitude: 75.0,
     period: 500.0,
     dx:null,
     yvalues: [],
     snowflakes: [],
     backgroundImage: null
   }),
  methods: {
    preload(sketch) {
      this.backgroundImage = sketch.loadImage("static/p5js.png");
    },
    setup(sketch) {
      sketch.createCanvas(1400, 100);
      this.w = this.w + 16;
      this.dx = (6.2831855 / this.period) * this.xspacing;
      this.yvalues = new Array(Math.floor(this.w / this.xspacing));
    },
    draw(sketch) {
      sketch.background('blue');

      //calcWave
      this.theta += 0.02;
      let x = this.theta;
      for (let i = 0; i < this.yvalues.length; i++) {
        this.yvalues[i] = Math.sin(x) * this.amplitude;
        x += this.dx;
      }

      //renderWave
      sketch.noStroke();
      sketch.fill(255);
      for (let x = 0; x < this.yvalues.length; x++) {
        sketch.ellipse(x * this.xspacing, sketch.height / 2 + this.yvalues[x], 16, 16);
      }
    },
  }
//     setup(sketch) {
//       sketch.createCanvas(1400, 200);
//     },
//     draw(sketch){
//       sketch.background('RoyalBlue');
//       let t = this.frameCount / 60;
//       // / create a random number of snowflakes each frame
//       for (let i = 0; i < this.random(5); i++) {
//       sketch.snowflakes.push(new snowflake()); // append snowflake object
//     }
//       for (let flake of snowflakes) {
//         sketch.flake.update(t); // update snowflake position
//         sketch.flake.display(); // draw snowflake
//       }
// },
//
//     snowflake() {
// // initialize coordinates
//       this.posX = 0;
//       this.posY = this.random(-50, 0);
//       this.initialangle = this.random(0, 2 * PI);
//       this.size = this.random(2, 5);
//
//       this.radius = sqrt(this.random(pow(width / 2, 2)));
//
//       update(time){
//         let w = 0.6; // angular speed
//         let angle = w * time + this.initialangle;
//         this.posX = width / 2 + this.radius * sin(angle);
//
//         this.posY += pow(this.size, 0.5);
//
//         if (this.posY > height) {
//           let index = snowflakes.indexOf(this);
//           snowflakes.splice(index, 1);
//         }
//       };
//
//       this.display() {
//       this.ellipse(this.posX, this.posY, this.size);
//     };
// }
//
//
//
//     },

}
</script>
