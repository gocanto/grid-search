let mix = require('laravel-mix');

mix
    .js('src/app.js', 'public')
    .vue({ version: 2 })
    .setPublicPath('public')
    .version()
    .sourceMaps();