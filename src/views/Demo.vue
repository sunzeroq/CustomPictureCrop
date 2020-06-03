<template>
    <div>
        <div class="draw-container">
<!--            <div class="custom-draw-header" v-show="headerState">-->
<!--                <div class="custom-draw-buttons">-->
<!--                    <button @click="complete" :disabled="!status">完成</button>-->
<!--                    <button @click="cancel" :disabled="!status">撤销</button>-->
                    <button @click="outPic">GetPic</button>
                    <button @click="reset">Reset</button>
<!--                    <button @click="close">关闭</button>-->
<!--                </div>-->

<!--            </div>-->
            <custom-crop
                    ref="crop"
                    :imgUrl="url"
                    :size="canvasSize"
                    :proportion="proportion"
                    :headerState="true"
                    :newUrl.sync="newUrl"
                    :line-color="lineColor"
                    :picState="picState"
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
            picState: false
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
    position: absolute;
    right: 0;
    top: 60px;
}
</style>
