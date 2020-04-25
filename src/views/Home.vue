<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <custom-draw :show="a" :imgUrl="url" :proportion="c"></custom-draw>
    <canvas id="canvasDemo"></canvas>
  </div>
</template>

<script>
// @ is an alias to /src
import CustomDraw from "@/components/customPic.vue";

export default {
  name: "Home",
  components: { CustomDraw },
  data() {
    return {
      a: true,
      url: "/logo.png",
      c: 1
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let canvas = document.getElementById("canvasDemo");
      let context = canvas.getContext("2d");
      let w = canvas.offsetWidth;
      let h = w;
      canvas.width = w;
      canvas.height = h;
      let img = new Image();
      img.src = this.url;

      console.log(img);

      img.onload = function() {
        context.drawImage(img, 0, 0, w, h);
      };
    }
  }
};
</script>
