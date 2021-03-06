let mix = require('laravel-mix');

mix
    .js('src/app.js', 'public')
    .setPublicPath('public')
    .version()
    .sourceMaps();