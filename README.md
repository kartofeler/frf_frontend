# frf-vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

### Changes

If you change port or IP address of API, you should change apiRoot value in main.js. 
Also if you host this app on some domain you need to change domain value
``` 
Vue.use(VueConfig, {
  domain: 'http://localhost:8080/#/',
  apiRoot: 'http://localhost:3000/'
})
```


For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
