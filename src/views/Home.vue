<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <custom-draw
      v-if="s"
      :show="a"
      :imgUrl="url"
      :proportion="c"
      @out-picture="out"
      @close-custom="close"
      :update:newUrl="newUrl"
    ></custom-draw>
    <canvas id="canvasDemo"></canvas>
    <button @click="open">aaa</button>
    <img src="newUrl" />
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
      a: false,
      url: "/logo.png",
      c: 1,
      imgUrl: "",
      s: false,
      newUrl: ""
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
        this.imgUrl = canvas.toDataURL();
      };
    },
    open() {
      this.s = true;
    },
    out() {
      console.log(this.newUrl);
    },
    close() {}
  }
};
</script>
