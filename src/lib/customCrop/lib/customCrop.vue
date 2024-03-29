<template>
    <div
            v-show="canvasState"
            class="custom-container"
    >
        <div
                class="custom-draw-content"
                :style="{ width: width }"
        >
            <div
                    ref="canvasDiv"
                    class="custom-canvas"
            >
                <canvas
                    ref="customCanvas"
                    id="custom"
                    style="width:100%;"
                    @click="savePoints"
                    @mousemove="saveMouse"
                    @dblclick.prevent="complete"
                ></canvas>
                <canvas
                    ref="bufferCanvas"
                    id="buffer"
                    style="width:100%;opacity:0;position:absolute;"
                ></canvas>
                <canvas ref="clipCanvas" id="clip" style="width:100%;opacity:0;position:absolute;"></canvas>
                <canvas ref="resultCanvas" id="result" style="width:100%;opacity:0;position:absolute;"></canvas>
            </div>
        </div>
    </div>
</template>
 
<script>
import { Canvas2Image } from "./canvas2image";
export default {
    props: {
        imgUrl: {
            type: String,
            default: "",
        },
        width: {
            type: String
        },
        canvasSize: {
            type: Object,
            default: function () {
                return {
                    height: 200,
                    width: 200,
                }
            }
        },
        proportion: {
            type: Number,
            default: 1,
        },
        headerState: {
            type: Boolean,
            default: true,
        },

        canvasState: {
            type: Boolean,
            default: true,
        },
        lineColor: {
            type: String,
            default: 'rgba(45, 183, 245, 1.0)'
        },
        backgroundColor: {
            type: String,
            default: 'rgba(45, 183, 245, 1.0)'
        }
    },
    components: {},
    name: "customCrop",
    data() {
        return {
            points: [],
            newImg: "",
            mouse: { x: null, y: null },
            id: null,
            status: true,
        };
    },
    mounted() {
        this.loadCanvas()
    },
    methods: {
        //事件监听
        savePoints(e) {
            this.points.push({ x: e.layerX, y: e.layerY })
        },
        saveMouse(e) {
            this.mouse = { x: e.layerX, y: e.layerY }
        },
        //设置canvas相关 canvas 宽高
        //todo
        setCanvas(id) {
            let canvas = document.getElementById(id)
            let context = canvas.getContext("2d")
            let w = canvas.offsetWidth
            let h = w / this.proportion
            canvas.width = w
            canvas.height = h
            return [context, w, h, canvas]
        },
        clearWatchDog() {
            clearInterval(this.id)
            this.id = null
            this.points = null
        },
        //入口
        loadCanvas() {
            this.id = setInterval(() => {
                if (this.$refs.customCanvas) {
                    this.updateCanvas()
                } else {
                    this.clearWatchDog()
                }
            }, 17)
        },
        updateCanvas() {
            let that = this
            let [context, w, h, buffer] = this.setCanvas("buffer")
            let img = new Image()
            img.src = this.imgUrl
            //清除画布
            context.clearRect(0, 0, w, h)
            //加载元素
            img.onload = function() {
                context.drawImage(img, 0, 0, w, h)
                that.drawLine(context)
                //缓冲复制到主屏
                that.copyCanvas(buffer)
            };
        },
        drawLine(context) {
            //绘制已确定位置的线
            let p = this.points
            context.lineWidth = 2
            context.strokeStyle = this.lineColor
            context.lineJoin = "round"
            for (let i = 0; i < p.length; i++) {
                context.lineTo(p[i].x, p[i].y)
                context.moveTo(p[i].x + 4, p[i].y)
                context.arc(p[i].x, p[i].y, 4, 0, 2 * Math.PI)
                context.moveTo(p[i].x, p[i].y)
            }
            //绘制mousemove预览线
            context.lineTo(this.mouse.x, this.mouse.y)
            context.moveTo(this.mouse.x + 4, this.mouse.y)
            context.arc(this.mouse.x, this.mouse.y, 4, 0, 2 * Math.PI)
            context.moveTo(this.mouse.x, this.mouse.y)
            context.stroke()
        },
        //双缓冲解决闪屏跳帧
        copyCanvas(buffer) {
            let [context] = this.setCanvas("custom")
            context.drawImage(buffer, 0, 0)
        },
        //canvas根据路径clip()裁剪图片
        complete() {
            let [context, w, h] = this.setCanvas("clip")
            //根据points绘制路径并裁剪
            this.canvasClip(context)
            this.updateImg(context, w, h)
            this.status = false
            this.clearWatchDog()
            this.$emit("complete")
        },
        canvasClip(context) {
            context.beginPath()
            for (let i = 0; i < this.points.length; i++) {
                let element = this.points[i]
                context.lineTo(element.x, element.y)
            }
            context.clip()
            context.closePath()
        },
        updateImg(context, w, h) {
            let img = new Image()
            img.src = this.imgUrl
            img.onload = function() {
                context.drawImage(img, 0, 0, w, h);
            }
        },
        cancel() {
            this.points.pop()
            if (this.id === null) {
                this.loadCanvas()
            }
        },
        getCanvas(id) {
            let canvas = document.getElementById(id)
            let context = canvas.getContext("2d")
            let w = canvas.offsetWidth
            let h = w / this.proportion
            return [context, w, h, canvas]
        },
        outPic() {
            let [context, w, h , canvas] = this.getCanvas("clip")
            canvas = this.replaceBackground(context)
            this.canvasToImg(canvas)
            //更新pic
            this.$emit("update:newUrl", this.newImg)
            //出图
            this.$emit("out-picture")
            this.clearWatchDog()
        },
        colorToArray(color) {
            let str = /(.+)?[(（](.+)(?=[)）])/.exec(color)
            let arr = str[2].split(',')
            let a = Number(arr.pop())
            arr.push(String(Math.floor(a * 255)))
            return arr
        },
        replaceBackground(sourceContext) {
            let [context, w, h , canvas] = this.setCanvas("result")
            let [R, G, B, A] = this.colorToArray(this.backgroundColor)
            let data = sourceContext.getImageData(0, 0, w, h)
            for (let i = 3; i < data.data.length; i += 4) {
                if (data.data[i] === 0) {
                    data.data[i - 3] = Number(R)
                    data.data[i - 2] = Number(G)
                    data.data[i - 1] = Number(B)
                    data.data[i] = Number(A)
                }
            }
            context.putImageData(data, 0, 0)
            return canvas
        },
        canvasToImg(canvas) {
            //只需要定义图片的宽度（高度计算得到）
            let imageWidth = canvas.offsetWidth
            let imageHeight = imageWidth / this.proportion
            //转换图片
            let img = Canvas2Image.convertToImage(
                canvas,
                imageWidth,
                imageHeight,
                "png",
            );
            this.newImg = img.src
        },
        close() {
            this.$emit("close-custom")
            this.clearWatchDog()
        },
        reset() {
            this.$emit("reset")
            //两种情况下的reset
            if (this.status) {
                //画图状态
                this.points = []
            } else {
                this.points = []
                this.loadCanvas()
                this.status = true
            }
        }
    },
};
</script>
<style lang="scss" scoped>
.custom-container {
    background-color: #ffffff;
    position: relative;
    .custom-draw-header {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 10004;
        right: 0;
        .custom-draw-buttons {
            display: flex;
            display: -webkit-flex;
            justify-content: flex-end;
        }
        .custom-draw-info {
            margin: 10px;
            padding: 0.75rem1.25rem;
            border-radius: 4px;
            background-color: white;
            border-width: 0;
        }
    }
    .custom-draw-content {
        position: relative;
        width: 100%;
        height: 100%;
        user-select: none;
        background-color: #ffffff;
        .custom-canvas {
            position: relative;
        }
    }
}
</style>
