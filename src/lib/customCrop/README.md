# Custom-Picture-Crop
A Picture(base64) custom shape clipping vue component.
           

## Github Page Demo 
[Demo](https://sunzeroq.github.io/CustomPicture/dist/index.html)
1. Click to draw the border line.
2. Double click or click the complete button to finish. 
3. Click the save button to get the picture.

![PreviewPic](https://github.com/sunzeroq/CustomPicture/blob/master/src/assets/img/demo.jpg)

## Install
```
npm i v-custom-crop
```
## Usage
```
import vCustomCrop from "v-custom-crop";
Vue.use(vCustomCrop);
```

```
<custom-crop
        ref="crop"
        url: String  //Base64 Data
        proportion：Number  
        @out-picture：Function
        @close-custom： Function
        :newUrl.sync: String  //Base64 Data 
        :line-color: String
></custom-crop>

this.$refs['crop'].reset()
this.$refs['crop'].outPic()
```
Line Color
```
line-color = "orange";
line-color = "#FFA500";
line-color = "rgb(255,165,0)";
line-color = "rgba(255,165,0,1)";
```
Set position and size

```
<div class="canvas-container">
    <custom-crop></custom-crop>
</div>
<style>
    .canvas-container {
        width: '100px',
        height: '100px',
    }
</style>
```
## Todo

- [X] Image custom crop(0.2.0)
    - [X] Custom border line style
    - [X] Custom canvas position
    - [ ] Custom background color
- [ ] Regular pattern clipping(0.3.0)
    - [ ] Rectangular box clipping 
    - [ ] Clipping box for other shapes 

