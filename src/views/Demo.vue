<template>
    <div>
        <div class="draw-container">
            <custom-draw
                    :imgUrl="url"
                    :proportion="proportion"
                    :headerState="true"
                    :newUrl.sync="newUrl"
                    @out-picture="out"
                    @reset="reset"
            ></custom-draw>
        </div>
        <div class="preview-container" v-show="splitState">
            <img v-if="newUrl" :src="newUrl" alt="resultImg"/>
        </div>
    </div>
</template>

<script>
import CustomDraw from "@/components/customPic.vue";

export default {
    name: "Demo",
    components: { CustomDraw },
    data() {
        return {
            url: "/logo.png",
            proportion: 1,
            imgUrl: "",
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
}
</style>
