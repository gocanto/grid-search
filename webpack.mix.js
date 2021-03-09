let mix = require('laravel-mix');

mix
    .js('resources/js/app.js', 'js')
    .vue({ version: 2 })
    .setPublicPath('public')
    .version()
    .sourceMaps()
    .extract(['vue'])

    .postCss('resources/c' +
        'ss/app.css', 'css', [
        require("tailwindcss"),
    ])

    .babelConfig({
        plugins: ['@babel/plugin-syntax-dynamic-import'],
    })

    .webpackConfig({
        output: {
            chunkFilename: 'js/chunks/[id].chunk.[chunkhash].js',
            publicPath: ''
        }
    })

    .options({
        uglify: {
            parallel: 16,
            cache: true,
            uglifyOptions: {
                mangle: true,
                compress: false,
            },
        },
    });
