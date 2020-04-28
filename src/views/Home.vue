<template>
    <div>
        <div class="draw-container">
            <custom-draw
                v-if="state"
                :imgUrl="url"
                :proportion="p"
                @out-picture="out"
                @close-custom="close"
                :newUrl.sync="newUrl"
            ></custom-draw>
        </div>
        <div class="preview-container" v-show="splitState">
            <img :src="newUrl" />
        </div>
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
            url: "/logo.png",
            p: 1,
            imgUrl: "",
            state: false,
            newUrl: "",
            splitState: false
        };
    },
    mounted() {
        this.open();
    },
    methods: {
        open() {
            this.state = true;
        },
        out() {
            // console.log(this.newUrl);
            this.splitState = true;
        },
        close() {
            this.splitState = false;
        }
    }
};
</script>
<style scoped>
.draw-container {
    position: absolute;
    width: 50%;
    height: 50%;
}
.preview-container {
    position: absolute;
    right: 0px;
}
</style>
