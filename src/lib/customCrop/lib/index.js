import customCrop from './customCrop'

const vCustomCrop = {
    // eslint-disable-next-line no-unused-vars
    install (Vue, options) {
        Vue.component('customCrop', customCrop)
    }
}

export default vCustomCrop
