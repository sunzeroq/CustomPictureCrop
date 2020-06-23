<template>
    <div>
        <div class="draw-container">
            <button @click="outPic">GetPic</button>
            <button @click="reset">Reset</button>
            <custom-crop
                    ref="crop"
                    :imgUrl="url"
                    :size="canvasSize"
                    :proportion="proportion"
                    :headerState="true"
                    :newUrl.sync="newUrl"
                    :line-color="lineColor"
                    :picState="picState"
                    :background-color="backgroundColor"
            ></custom-crop>
        </div>
        <div class="preview-container" v-show="splitState">
            <img v-if="newUrl" :src="newUrl" alt="resultImg"/>
        </div>
    </div>
</template>

<script>
import demoImg from '../assets/img/logo.png'

export default {
    name: "Demo",
    components: { },
    data() {
        return {
            url: demoImg,
            canvasSize: {
                width: 500,
                height: 500,
            },
            proportion: 1,
            width: "1200px",
            imgUrl: "",
            lineColor: "rgba(45, 122, 245)",
            state: false,
            newUrl: {
                type: String,
                default: null,
            },
            splitState: false,
            canvasState: true,
            picState: false,
            backgroundColor: [0, 255, 255, 255]
        };
    },
    mounted() {
        this.open()
    },
    methods: {
        open() {
            this.state = true
        },
        reset() {
            this.$refs['crop'].reset()
            this.splitState = false
        },
        outPic() {
            this.splitState = true
            this.$refs['crop'].outPic()
        }
    }
};
</script>
<style scoped>
.draw-container {
    position: relative;
    width: 800px;
    height: 800px;
}
.preview-container {
    display: block;
    position: relative;
    right: 0;
    top: 60px;
}
</style>
