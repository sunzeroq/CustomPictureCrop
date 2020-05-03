const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'views': '@/views',
                'utils': '@/utils',
                'lib': '@/lib',
                '@': resolve('src')
            }
        },
    },
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
}