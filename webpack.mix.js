let mix = require('laravel-mix');

mix
    .js('src/app.js', '')
    .vue({ version: 2 })
    .setPublicPath('public/js')
    .version()
    .sourceMaps()
    .extract(['vue']);