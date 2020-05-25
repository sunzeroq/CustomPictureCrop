<template>
    <div>
        <div class="draw-container">
            <custom-crop
                    :imgUrl="url"
                    :proportion="proportion"
                    :headerState="true"
                    :newUrl.sync="newUrl"
                    :width="width"
                    :line-color="lineColor"
                    @out-picture="out"
                    @reset="reset"
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
        };
    },
    mounted() {
        this.open()
    },
    methods: {
        open() {
            this.state = true
        },
        out() {
            // console.log(this.newUrl);
            this.splitState = true
        },
        reset() {
            this.splitState = false
        },
    }
};
</script>
<style scoped>
.draw-container {
    position: relative;
    width: 50%;
    height: 50%;
}
.preview-container {
    position: absolute;
    right: 0;
    top: 60px;
}
</style>
