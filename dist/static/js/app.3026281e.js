(function(t){function e(e){for(var a,i,s=e[0],c=e[1],u=e[2],f=0,p=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},3225:function(t,e,n){},"4ffd":function(t,e,n){t.exports=n.p+"static/img/logo.3bfd9f5c.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],i=n("2877"),s={},c=Object(i["a"])(s,o,r,!1,null,null,null),u=c.exports,l=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"draw-container"},[n("custom-crop",{ref:"crop",attrs:{imgUrl:t.url,size:t.canvasSize,proportion:t.proportion,headerState:!0,newUrl:t.newUrl,"line-color":t.lineColor,picState:t.picState,"background-color":t.backgroundColor},on:{"update:newUrl":function(e){t.newUrl=e},"update:new-url":function(e){t.newUrl=e},complete:t.controlState}}),n("div",{staticClass:"draw-tool-content"},[n("span",[t._v("单击开始绘制边框--\x3e在最后一点处双击完成/点击compelte--\x3e点击getPic出图(移动端未优化")]),n("Button",{attrs:{disabled:!t.state},on:{click:t.cancel}},[t._v("Cancel")]),n("Button",{attrs:{disabled:!t.state},on:{click:t.complete}},[t._v("Complete")]),n("Button",{attrs:{disabled:t.state},on:{click:t.outPic}},[t._v("GetPic")]),n("Button",{on:{click:t.reset}},[t._v("Reset")]),n("span",[t._v(" lineColor "),n("ColorPicker",{attrs:{alpha:""},model:{value:t.lineColor,callback:function(e){t.lineColor=e},expression:"lineColor"}})],1),n("span",[t._v(" backgroundColor "),n("ColorPicker",{attrs:{alpha:""},model:{value:t.backgroundColor,callback:function(e){t.backgroundColor=e},expression:"backgroundColor"}})],1)],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.splitState,expression:"splitState"}],staticClass:"preview-container"},[t.newUrl?n("img",{attrs:{src:t.newUrl,alt:"resultImg"}}):t._e()])],1)},p=[],d=n("4ffd"),h=n.n(d),v={name:"Demo",components:{},data:function(){return{url:h.a,canvasSize:{width:500,height:500},proportion:1,width:"1200px",imgUrl:"",lineColor:"rgba(45, 122, 245, 1)",state:!0,newUrl:{type:String,default:null},splitState:!1,canvasState:!0,picState:!1,backgroundColor:"rgba(45, 122, 245, 0)"}},mounted:function(){this.open()},methods:{open:function(){},reset:function(){this.$refs["crop"].reset(),this.splitState=!1,this.state=!0},complete:function(){this.state&&(this.$refs["crop"].complete(),this.state=!1)},outPic:function(){this.splitState=!0,this.$refs["crop"].outPic()},cancel:function(){this.$refs["crop"].cancel()},controlState:function(){this.state=!1}}},m=v,g=(n("61ba"),Object(i["a"])(m,f,p,!1,null,"203db1ae",null)),b=g.exports;a["default"].use(l["a"]);var w=[{path:"/",name:"demo",component:b}],y=new l["a"]({routes:w}),C=y,S=n("2f62");a["default"].use(S["a"]);var x=new S["a"].Store({state:{},mutations:{},actions:{},modules:{}}),I=n("7b10"),P=n.n(I),k=n("f825"),j=n.n(k);n("f8ce");a["default"].use(P.a),a["default"].use(j.a),a["default"].config.productionTip=!1,new a["default"]({router:C,store:x,render:function(t){return t(u)}}).$mount("#app")},"61ba":function(t,e,n){"use strict";var a=n("3225"),o=n.n(a);o.a},"7b10":function(t,e,n){t.exports=n("f816")},"9a39":function(t,e,n){"use strict";var a=n("ae56"),o=n.n(a);o.a},ae56:function(t,e,n){},f816:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.canvasState,expression:"canvasState"}],staticClass:"custom-container"},[n("div",{staticClass:"custom-draw-content",style:{width:t.width}},[n("div",{ref:"canvasDiv",staticClass:"custom-canvas"},[n("canvas",{ref:"customCanvas",staticStyle:{width:"100%"},attrs:{id:"custom"},on:{click:t.savePoints,mousemove:t.saveMouse,dblclick:function(e){return e.preventDefault(),t.complete(e)}}}),n("canvas",{ref:"bufferCanvas",staticStyle:{width:"100%",opacity:"0",position:"absolute"},attrs:{id:"buffer"}}),n("canvas",{ref:"clipCanvas",staticStyle:{width:"100%",opacity:"0",position:"absolute"},attrs:{id:"clip"}}),n("canvas",{ref:"resultCanvas",staticStyle:{width:"100%",opacity:"0",position:"absolute"},attrs:{id:"result"}})])])])},o=[],r=(n("a9e3"),n("ac1f"),n("1276"),n("3835")),i=(n("99af"),n("466d"),n("5319"),function(){var t=function(){var t=document.createElement("canvas"),e=t.getContext("2d");return{canvas:!!e,imageData:!!e.getImageData,dataURL:!!t.toDataURL,btoa:!!window.btoa}}(),e="image/octet-stream";function n(t,e,n){var a=t.width,o=t.height;void 0==e&&(e=a),void 0==n&&(n=o);var r=document.createElement("canvas"),i=r.getContext("2d");return r.width=e,r.height=n,i.drawImage(t,0,0,a,o,0,0,e,n),r}function a(t,e,a,o){return t=n(t,a,o),t.toDataURL(e)}function o(t){document.location.href=t}function r(t){var e=document.createElement("img");return e.src=t,e}function i(t){t=t.toLowerCase().replace(/jpg/i,"jpeg");var e=t.match(/png|jpeg|bmp|gif/)[0];return"image/"+e}function s(t){if(!window.btoa)throw"btoa undefined";var e="";if("string"==typeof t)e=t;else for(var n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return btoa(e)}function c(t){var e=t.width,n=t.height;return t.getContext("2d").getImageData(0,0,e,n)}function u(t,e){return"data:"+e+";base64,"+t}var l=function(t){var e=t.width,n=t.height,a=e*n*3,o=a+54,r=[66,77,255&o,o>>8&255,o>>16&255,o>>24&255,0,0,0,0,54,0,0,0],i=[40,0,0,0,255&e,e>>8&255,e>>16&255,e>>24&255,255&n,n>>8&255,n>>16&255,n>>24&255,1,0,24,0,0,0,0,0,255&a,a>>8&255,a>>16&255,a>>24&255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],c=(4-3*e%4)%4,u=t.data,l="",f=e<<2,p=n,d=String.fromCharCode;do{for(var h=f*(p-1),v="",m=0;m<e;m++){var g=m<<2;v+=d(u[h+g+2])+d(u[h+g+1])+d(u[h+g])}for(var b=0;b<c;b++)v+=String.fromCharCode(0);l+=v}while(--p);var w=s(r.concat(i))+s(l);return w},f=function(r,s,f,p){if(t.canvas&&t.dataURL)if("string"==typeof r&&(r=document.getElementById(r)),void 0==p&&(p="png"),p=i(p),/bmp/.test(p)){var d=c(n(r,s,f)),h=l(d);o(u(h,e))}else h=a(r,p,s,f),o(h.replace(p,e))},p=function(e,o,s,f){if(t.canvas&&t.dataURL){if("string"==typeof e&&(e=document.getElementById(e)),void 0==f&&(f="png"),f=i(f),/bmp/.test(f)){var p=c(n(e,o,s)),d=l(p);return r(u(d,"image/bmp"))}return d=a(e,f,o,s),r(d)}};return{saveAsImage:f,saveAsPNG:function(t,e,n){return f(t,e,n,"png")},saveAsJPEG:function(t,e,n){return f(t,e,n,"jpeg")},saveAsGIF:function(t,e,n){return f(t,e,n,"gif")},saveAsBMP:function(t,e,n){return f(t,e,n,"bmp")},convertToImage:p,convertToPNG:function(t,e,n){return p(t,e,n,"png")},convertToJPEG:function(t,e,n){return p(t,e,n,"jpeg")},convertToGIF:function(t,e,n){return p(t,e,n,"gif")},convertToBMP:function(t,e,n){return p(t,e,n,"bmp")}}}()),s={props:{imgUrl:{type:String,default:""},width:{type:String},canvasSize:{type:Object,default:function(){return{height:200,width:200}}},proportion:{type:Number,default:1},headerState:{type:Boolean,default:!0},canvasState:{type:Boolean,default:!0},lineColor:{type:String,default:"rgba(45, 183, 245, 1.0)"},backgroundColor:{type:String,default:"rgba(45, 183, 245, 1.0)"}},components:{},name:"customCrop",data:function(){return{points:[],newImg:"",mouse:{x:null,y:null},id:null,status:!0}},mounted:function(){this.loadCanvas()},methods:{savePoints:function(t){this.points.push({x:t.layerX,y:t.layerY})},saveMouse:function(t){this.mouse={x:t.layerX,y:t.layerY}},setCanvas:function(t){var e=document.getElementById(t),n=e.getContext("2d"),a=e.offsetWidth,o=a/this.proportion;return e.width=a,e.height=o,[n,a,o,e]},clearWatchDog:function(){clearInterval(this.id),this.id=null,this.points=null},loadCanvas:function(){var t=this;this.id=setInterval((function(){t.$refs.customCanvas?t.updateCanvas():t.clearWatchDog()}),17)},updateCanvas:function(){var t=this,e=this.setCanvas("buffer"),n=Object(r["a"])(e,4),a=n[0],o=n[1],i=n[2],s=n[3],c=new Image;c.src=this.imgUrl,a.clearRect(0,0,o,i),c.onload=function(){a.drawImage(c,0,0,o,i),t.drawLine(a),t.copyCanvas(s)}},drawLine:function(t){var e=this.points;t.lineWidth=2,t.strokeStyle=this.lineColor,t.lineJoin="round";for(var n=0;n<e.length;n++)t.lineTo(e[n].x,e[n].y),t.moveTo(e[n].x+4,e[n].y),t.arc(e[n].x,e[n].y,4,0,2*Math.PI),t.moveTo(e[n].x,e[n].y);t.lineTo(this.mouse.x,this.mouse.y),t.moveTo(this.mouse.x+4,this.mouse.y),t.arc(this.mouse.x,this.mouse.y,4,0,2*Math.PI),t.moveTo(this.mouse.x,this.mouse.y),t.stroke()},copyCanvas:function(t){var e=this.setCanvas("custom"),n=Object(r["a"])(e,1),a=n[0];a.drawImage(t,0,0)},complete:function(){var t=this.setCanvas("clip"),e=Object(r["a"])(t,3),n=e[0],a=e[1],o=e[2];this.canvasClip(n),this.updateImg(n,a,o),this.status=!1,this.clearWatchDog(),this.$emit("complete")},canvasClip:function(t){t.beginPath();for(var e=0;e<this.points.length;e++){var n=this.points[e];t.lineTo(n.x,n.y)}t.clip(),t.closePath()},updateImg:function(t,e,n){var a=new Image;a.src=this.imgUrl,a.onload=function(){t.drawImage(a,0,0,e,n)}},cancel:function(){this.points.pop(),null===this.id&&this.loadCanvas()},getCanvas:function(t){var e=document.getElementById(t),n=e.getContext("2d"),a=e.offsetWidth,o=a/this.proportion;return[n,a,o,e]},outPic:function(){var t=this.getCanvas("clip"),e=Object(r["a"])(t,4),n=e[0],a=(e[1],e[2],e[3]);a=this.replaceBackground(n),this.canvasToImg(a),this.$emit("update:newUrl",this.newImg),this.$emit("out-picture"),this.clearWatchDog()},colorToArray:function(t){var e=/(.+)?[(（](.+)(?=[)）])/.exec(t),n=e[2].split(","),a=Number(n.pop());return n.push(String(Math.floor(255*a))),n},replaceBackground:function(t){for(var e=this.setCanvas("result"),n=Object(r["a"])(e,4),a=n[0],o=n[1],i=n[2],s=n[3],c=this.colorToArray(this.backgroundColor),u=Object(r["a"])(c,4),l=u[0],f=u[1],p=u[2],d=u[3],h=t.getImageData(0,0,o,i),v=3;v<h.data.length;v+=4)0===h.data[v]&&(h.data[v-3]=Number(l),h.data[v-2]=Number(f),h.data[v-1]=Number(p),h.data[v]=Number(d));return a.putImageData(h,0,0),s},canvasToImg:function(t){var e=t.offsetWidth,n=e/this.proportion,a=i.convertToImage(t,e,n,"png");this.newImg=a.src},close:function(){this.$emit("close-custom"),this.clearWatchDog()},reset:function(){this.$emit("reset"),this.status?this.points=[]:(this.points=[],this.loadCanvas(),this.status=!0)}}},c=s,u=(n("9a39"),n("2877")),l=Object(u["a"])(c,a,o,!1,null,"a6f55cb4",null),f=l.exports,p={install:function(t,e){t.component("customCrop",f)}};e["default"]=p}});
//# sourceMappingURL=app.3026281e.js.map