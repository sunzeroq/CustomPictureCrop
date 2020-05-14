# Custom-Picture-Crop
A Picture(base64) custom shape clipping vue component.
           

## Github Page Demo 
[Demo](https://sunzeroq.github.io/CustomPicture/dist/index.html)
1. Click to draw the border line.
2. Double click or click the complete button to finish. 
3. Click the save button to get the picture.

![PreviewPic](https://github.com/sunzeroq/CustomPicture/tree/master/src/assets/img/demo.jpg)

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
        url: string  //base64 image
        proportion：number  
        @out-picture：function
        @close-custom： function
        :newUrl.sync= string  //base64 image
></custom-crop>
```
##Todo

- [ ] Image custom crop(1.0.0)
    - [ ] Custom border line style
    - [ ] Custom canvas position
- [ ] Video custom crop(2.0.0)
