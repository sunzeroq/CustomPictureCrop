# Custom-Picture-Crop
A Picture(base64) custom shape clipping vue component.
           

## Github Page Demo 
[Demo](https://sunzeroq.github.io/CustomPicture/dist/index.html)

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
