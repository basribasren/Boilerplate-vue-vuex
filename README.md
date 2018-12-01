# boilerplate-vue-vuex

[![Build Status](https://travis-ci.org/basribasren/boilerplate-vue-vuex.svg?branch=master)](https://travis-ci.org/basribasren/boilerplate-vue-vuex) [![Build status](https://ci.appveyor.com/api/projects/status/weuboxr8dwbpp0q2/branch/master?svg=true)](https://ci.appveyor.com/project/basribasren/boilerplate-vue-vuex/branch/master) [![dependencies Status](https://david-dm.org/basribasren/boilerplate-vue-vuex/status.svg)](https://david-dm.org/basribasren/boilerplate-vue-vuex) ![GitHub All Releases](https://img.shields.io/github/downloads/basribasren/boilerplate-vue-vuex/total.svg) [![GitHub license](https://img.shields.io/github/license/basribasren/boilerplate-vue-vuex.svg)](https://github.com/basribasren/boilerplate-vue-vuex/blob/master/LICENSE) [![GitHub last commit](https://img.shields.io/github/last-commit/basribasren/boilerplate-vue-vuex.svg)](https://github.com/basribasren/boilerplate-vue-vuex/commits/master)

boilerplate for create web using vue and vuex.

## Ecosystem

<!-- prettier-ignore -->
| Project | Status | Description |
|---------|--------|-------------|
| [vue]          | [![vue-status]][vue-package] |  A progressive, incrementally-adoptable JavaScript framework for building UI on the web. |
| [vuex]          | [![vuex-status]][vuex-package] |  Centralized State Management for Vue.js. |
| [vue-router]          | [![vue-router-status]][vue-router-package] |  The official router for Vue.js. |
| [vue-cli]          | [![vue-cli-status]][vue-cli-package] |  Standard Tooling for Vue.js Development. |
| [materialui]          | [![materialui-status]][materialui-package] | React components that implement Google's Material Design. |

[vue]: https://github.com/vuejs/vue
[vue-status]: https://img.shields.io/npm/v/vue.svg
[vue-package]: https://npmjs.com/package/vue
[vuex]: https://github.com/vuejs/vuex
[vuex-status]: https://img.shields.io/npm/v/vuex.svg
[vuex-package]: https://npmjs.com/package/vuex
[vue-router]: https://github.com/vuejs/vue-router
[vue-router-status]: https://img.shields.io/npm/v/vue-router.svg
[vue-router-package]: https://npmjs.com/package/vue-router
[vue-cli]: https://github.com/vuejs/vue-cli
[vue-cli-status]: https://img.shields.io/npm/v/vue-cli.svg
[vue-cli-package]: https://npmjs.com/package/vue-cli
[materialui]: https://github.com/mui-org/material-ui
[materialui-status]: https://img.shields.io/npm/v/material-ui.svg
[materialui-package]: https://npmjs.com/package/material-ui

## Folder Structure

After creation, your project should look like this:

```
boilerplate-vue-vuex
├── public/
│   └── img/
│   └── favicon.ico
│   └── index.html
│   └── manifest.json
│   └── robots.txt
├── src/
│   ├── assets
│   │   ├── img/
│   │   └── scss/
│   ├── components
│   │   ├── Cards/
│   │   ├── Dropdown.vue
│   │   ├── NotificationPlugin/
│   │   ├── SidebarPlugin/
│   │   ├── Tables/
│   │   └── index.js
│   ├── pages
│   │   ├── Dashboard.vue
│   │   ├── Icons.vue
│   │   ├── Layout/
│   │   ├── Maps.vue
│   │   ├── Notifications.vue
│   │   ├── TableList.vue
│   │   ├── Typography.vue
│   │   ├── UpgradeToPRO.vue
│   │   ├── UserProfile/
│   │   ├── UserProfile.vue
│   │   └── index.js
│   ├── routers/
│   │   └── router.js
│   ├── vuex/
│   │   ├── actions/
│   │   ├── getters/
│   │   ├── mutations/
│   │   ├── states/
│   │   └── store.js
│   ├── App.vue
│   ├── main.js
│   ├── registerServiceWorker.js
│   ├── globalComponents.js
│   ├── globalDirectives.js
│   └── material-dashboard.js
├── tests/
│   ├── e2e/
│   └── unit/
├── theme/
│   ├── coreui-vue-admin/
│   └── vue-material-dashboard/
├── .browserslistrc
├── .gitignore
├── .eslintignore
├── .eslintrc.js
├── .travis.yml
├── appveyor.yml
├── vue.config.js
├── babel.config.js
├── postcss.config.js
├── package.json
├── README.md
└── LICENSE
```

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">

## Available Scripts

In the project directory, you can run:

### `yarn install`

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

### `yarn run serve`

Compiles and hot-reloads for development

### `yarn run build`

Builds the app for production to the `dist` folder.<br>
Compiles and minifies for production

### `yarn run test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `yarn run lint`

Lints and fixes files.

### `yarn run test:e2e`

Run your end-to-end tests

### `yarn run test:unit`

Run your unit tests

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Maintainers

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<img src="https://avatars0.githubusercontent.com/u/25193994?v=4" width="100px;"/><br /><sub><b>Basri Basren</b></sub>

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Something Missing?

If you have ideas for more “How To” recipes that should be on this page, [let us know](https://github.com/basribasren/boilerplate-vue-vuex/issues)
