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
        ></custom-crop>
        <div class="preview-container" v-show="splitState">
            <img v-if="newUrl" :src="newUrl" alt="resultImg"/>
        </div>
        <div class="draw-tool-content">
            <Button @click="outPic">GetPic</Button>
            <Button @click="reset">Reset</Button>
            <span>
                lineColor
                <ColorPicker v-model="lineColor" alpha />
            </span>
            <span>
                backgroundColor
                <ColorPicker v-model="backgroundColor" alpha />
                {{color}}
            </span>
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
            state: false,
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
<style scoped lang="scss">
.draw-container {
    position: relative;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
}

.draw-tool-content {
    margin-right: 200px;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
}
</style>
