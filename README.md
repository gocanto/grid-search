## Products overview simulator

This project simulates a given e-commerce store back-office products list overview.

Browsing the products overview is a breeze since the App will let you filter products 
by `name` or `title`, visit given products profile to place an orders for them, and see a 
full or short description of them.

## Dev Requirements

To make use of this code base, you will have to install [Git](https://git-scm.com/), 
[Nodejs](https://nodejs.org/en/) `>=12` and [Npm](https://www.npmjs.com/) / [Yarn](https://yarnpkg.com/) in your local machine or container.

Once you have those tools installed, you will be able to do the following:

- Within your local console, go to the directory of your preference and type 
  `git@github.com:gocanto/grid-search.git`.
  
- Next, you will be able to CD into the newly created directory, like so `cd grid-search`.

- Now, you are able to type the following commands in order for you to run the app.
```bash
    npm install && npm run dev #to compile the app    
    npm run watch #to compile the app and have an instant feedback while developping
    npm run hot #to allow for hot module reloding while in development mode
    npm run dev #to compile the app for development
    npm run prod #to compile the app for production
```    

- After the compilation process is done, you will be able to head to the `public` directory
contained within the root folder and click on the `index.html` file to run the app.

> Alternatively, you would be able to download the compiled app from [here](https://github.com/gocanto/grid-search/blob/main/dist/public.zip).
> After you have downloaded the `public.zip` file, you will be able to browse the products overview by clicking on the `index.html` file.

## Compiled assets stats

```bash
┌───────────────────────────────────────────────────────────────────────────────┬───────────┐
│                                                                          File │ Size      │
├───────────────────────────────────────────────────────────────────────────────┼───────────┤
│                                                                    /js/app.js │ 1.71 MiB  │
│                                                                /js/app.js.map │ 3.42 MiB  │
│                                                               /js/manifest.js │ 2.7 KiB   │
│                                                           /js/manifest.js.map │ 15.1 KiB  │
│                                                                 /js/vendor.js │ 91.9 KiB  │
│                                                     /js/vendor.js.LICENSE.txt │ 87 bytes  │
│                                                             /js/vendor.js.map │ 486 KiB   │
│                                                                   css/app.css │ 4.75 KiB  │
│                                                               css/app.css.map │ 1.9 KiB   │
│                                   js/chunks/431.chunk.b9828a7e8ffca8af09ca.js │ 28.6 KiB  │
│                               js/chunks/431.chunk.b9828a7e8ffca8af09ca.js.map │ 24.2 KiB  │
│                                   js/chunks/851.chunk.0a359065491d7d8726cc.js │ 796 bytes │
│                               js/chunks/851.chunk.0a359065491d7d8726cc.js.map │ 3 KiB     │
│                                   js/chunks/936.chunk.0526a0ec373d03530c41.js │ 1.34 KiB  │
│                               js/chunks/936.chunk.0526a0ec373d03530c41.js.map │ 6.49 KiB  │
└───────────────────────────────────────────────────────────────────────────────┴───────────┘
```

## Contributing

Please feel free to fork this package and contribute by submitting a pull request to enhance 
its functionalities.

## License

The MIT License (MIT). Please see [License File](https://github.com/gocanto/grid-search/blob/main/LICENSE) for more information.
