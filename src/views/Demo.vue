<template>
    <div class="draw-container">

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
                @complete="controlState"
        ></custom-crop>

        <div class="draw-tool-content">
            <span>单击开始绘制边框-->在最后一点处双击完成/点击compelte-->点击getPic出图(移动端未优化</span>
            <Button @click="cancel" :disabled="!state">Cancel</Button>
            <Button @click="complete" :disabled="!state">Complete</Button>
            <Button @click="outPic" :disabled="state">GetPic</Button>
            <Button @click="reset">Reset</Button>
            <span>
                lineColor
                <ColorPicker v-model="lineColor" alpha />
            </span>
            <span>
                backgroundColor
                <ColorPicker v-model="backgroundColor" alpha />
            </span>
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
            lineColor: "rgba(45, 122, 245, 1)",
            state: true,
            newUrl: {
                type: String,
                default: null,
            },
            splitState: false,
            canvasState: true,
            picState: false,
            backgroundColor: "rgba(45, 122, 245, 0)",
        };
    },
    mounted() {
        this.open()
    },
    methods: {
        open() {
            // this.state = true
        },
        reset() {
            this.$refs['crop'].reset()
            this.splitState = false
            this.state = true
        },
        complete() {
            if (this.state) {
                this.$refs['crop'].complete()
                this.state = false
            }
        },
        outPic() {
            this.splitState = true
            this.$refs['crop'].outPic()
        },
        cancel() {
            this.$refs['crop'].cancel()
        },
        controlState() {
            this.state = false
        }
    }
};
</script>
<style scoped lang="scss">
.draw-container {
    position: relative;
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
}

.draw-tool-content {
    width: 200px;
    margin: 20px;
    z-index: 1;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
}
</style>
