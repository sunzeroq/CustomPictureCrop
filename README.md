# vue-demo

```
<custom-draw
        url: string //传入图片的base64 URL
        proportion：number  //长宽比（canvas）
        //抛出一些事件
        @out-picture：function
        @close-custom： function
        //抛出裁剪后图片的base64 URL
        :newUrl.sync= string
></custom-draw>

```
