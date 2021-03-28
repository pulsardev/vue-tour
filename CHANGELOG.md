# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

# [2.0.0](https://github.com/pulsardev/vue-tour/compare/v1.6.0...v2.0.0) (2021-03-28)


### Bug Fixes

* change offset and shadow ([6359b43](https://github.com/pulsardev/vue-tour/commit/6359b43))
* fix the arrow position ([4a2297b](https://github.com/pulsardev/vue-tour/commit/4a2297b))


### Features

* update Popper.js to v2.x ([5d8f790](https://github.com/pulsardev/vue-tour/pull/177/commits/5d8f790))


### BREAKING CHANGES

* **Popper.js:** as Popper.js has been updated, all custom Popper.js options passed in step params must be changed to their Popper.js v2.x equivalent.
* **options:** all custom options are now in camelCase. If you customized highlight classes, you should change the options' keys to camelCase. See ([9041d2f](https://github.com/pulsardev/vue-tour/commit/9041d2f)) for the complete change.

## [1.6.0](https://github.com/pulsardev/vue-tour/compare/v1.5.0...v1.6.0) (2021-03-27)


### Bug Fixes

* move the keyup listener before the return ([f42f637](https://github.com/pulsardev/vue-tour/commit/f42f637))


### Features

* add sticky step ([1777d08](https://github.com/pulsardev/vue-tour/commit/1777d08))

## [1.5.0](https://github.com/pulsardev/vue-tour/compare/v1.4.0...v1.5.0) (2020-07-10)


### Features

* **before:** adds support for rejecting promises from the before method along with supporting unit tests ([bfee650](https://github.com/pulsardev/vue-tour/commit/bfee65028af3bb7af38257af2196272d00237df1))
* **tour:** added promises for start, next, and prev so that users of the component may do async operations to get the UI in a good state ([3af3496](https://github.com/pulsardev/vue-tour/commit/3af3496c8c32ebc27461df62ada62b0263670db3))

## [1.4.0](https://github.com/pulsardev/vue-tour/compare/v1.3.1...v1.4.0) (2020-05-30)


### Features

* enable specific navigation keys ([89ff650](https://github.com/pulsardev/vue-tour/commit/89ff650ffbde5c4a87614bcb31f774231f336a2e))

### [1.3.1](https://github.com/pulsardev/vue-tour/compare/v1.3.0...v1.3.1) (2020-05-08)


### Features

* provide types for typescript ([eee7fef](https://github.com/pulsardev/vue-tour/commit/eee7fef6d7ae549b28a7b640bafdda621814f147))

## [1.3.0](https://github.com/pulsardev/vue-tour/compare/v1.2.0...v1.3.0) (2020-02-06)


### Features

* add example step title and link to placement options ([4cd8ccc](https://github.com/pulsardev/vue-tour/commit/4cd8ccc0794f739cee2ef3d8141ad291ee92faa2))
* add options.debug flag for console output ([effbd1d](https://github.com/pulsardev/vue-tour/commit/effbd1dd18708a610670765bdad2416af9e18d7d)), closes [#101](https://github.com/pulsardev/vue-tour/issues/101)
* **buttons:** support global and per step button configuration ([86fd9b8](https://github.com/pulsardev/vue-tour/commit/86fd9b813fa6416f2c99b45a3f781384361eb162))
* add BEM compliant class names to step buttons ([34b9625](https://github.com/pulsardev/vue-tour/commit/34b96254c501ac0f243d243fd837b4e9eadb261a))
* add highlight ([e6a2a2d](https://github.com/pulsardev/vue-tour/commit/e6a2a2d4da7d146340e22e750efb811a214b8d33))
* **highlight:** add the possibility to highlight elements during the tour ([f828b12](https://github.com/pulsardev/vue-tour/commit/f828b1210257aaf6a39b0151022701c0b1332cac))
* add enabledButtons new props (all true by default) which can ([1354557](https://github.com/pulsardev/vue-tour/commit/13545575e78327e40e20af9fab7fc9889e8061c6))


### Bug Fixes

* pass a copy of the enabledButtons configuration object ([9fb0ec9](https://github.com/pulsardev/vue-tour/commit/9fb0ec92f1176905edf7cca36f18eda0894ffb70))

## [1.2.0](https://github.com/pulsardev/vue-tour/compare/v1.1.0...v1.2.0) (2019-12-29)


### Features

* **highlight:** add the possibility to highlight elements during the tour ([317ff35](https://github.com/pulsardev/vue-tour/commit/317ff359ff2be18a2f8d8ffe3a3c5be93e458175))
* add highlight ([5363d42](https://github.com/pulsardev/vue-tour/commit/5363d42fc6c1b7eca23b8c6e4c33d3108184924f))

<a name="1.1.0"></a>
# [1.1.0](https://github.com/pulsardev/vue-tour/compare/v1.0.1...v1.1.0) (2018-10-16)


### Bug Fixes

* bump the circleci node version to allow the tests to run ([aeeb2f3](https://github.com/pulsardev/vue-tour/commit/aeeb2f3))
* Changed [@click](https://github.com/click) on Steps to [@click](https://github.com/click).prevent ([d2b7a11](https://github.com/pulsardev/vue-tour/commit/d2b7a11))
* destructuration doesn't work, the parameter(s) has to be passed directly ([bccf4ee](https://github.com/pulsardev/vue-tour/commit/bccf4ee))
* resolve vulnerabilities reported by npm ([38cb274](https://github.com/pulsardev/vue-tour/commit/38cb274))


### Features

* add a new step to show off the target handling in corners ([16fd73f](https://github.com/pulsardev/vue-tour/commit/16fd73f))
* add optional starting step to VTour ([13d6996](https://github.com/pulsardev/vue-tour/commit/13d6996))
* add options to change navigation buttons text ([f1a4302](https://github.com/pulsardev/vue-tour/commit/f1a4302))
* use jump.js for more options per step ([64eb8d1](https://github.com/pulsardev/vue-tour/commit/64eb8d1))
* **scroll:** use jump.js to scroll only when scroll options are defined ([97667bd](https://github.com/pulsardev/vue-tour/commit/97667bd))
* **steps:** add the possibility to change the text of the buttons through the tour options ([2ead09e](https://github.com/pulsardev/vue-tour/commit/2ead09e))



<a name="1.0.1"></a>
## [1.0.1](https://github.com/pulsardev/vue-tour/compare/v1.0.0...v1.0.1) (2018-03-16)


### Bug Fixes

* bump the vue-tour version in the demo ([1c7a9eb](https://github.com/pulsardev/vue-tour/commit/1c7a9eb))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/pulsardev/vue-tour/compare/v1.0.0-beta.0...v1.0.0) (2018-03-16)


### Bug Fixes

* add default props to prevent error when the property is not passed ([3405237](https://github.com/pulsardev/vue-tour/commit/3405237))
* prevent the tour of starting again when using arrow keys ([d7e8d42](https://github.com/pulsardev/vue-tour/commit/d7e8d42))
* remove the side-effects by removing only our event listener ([3b9e389](https://github.com/pulsardev/vue-tour/commit/3b9e389))


### Features

* add a GitHub button on the demo and scroll back to the top ([94adbdd](https://github.com/pulsardev/vue-tour/commit/94adbdd))
* add a header slot in VStep ([8cd3883](https://github.com/pulsardev/vue-tour/commit/8cd3883))
* add custom callback management ([83481b1](https://github.com/pulsardev/vue-tour/commit/83481b1))
* add support for Popper's parameters ([4328c37](https://github.com/pulsardev/vue-tour/commit/4328c37))
* handle keyboard events + support a config prop + min and max props ([bba1ed6](https://github.com/pulsardev/vue-tour/commit/bba1ed6))
* initial constant file ([623e962](https://github.com/pulsardev/vue-tour/commit/623e962))
* prevent dismissing the tour using the keyboard ([bd73513](https://github.com/pulsardev/vue-tour/commit/bd73513))
* prevent dismissing the tour when using previousStep on the first step ([fa93aac](https://github.com/pulsardev/vue-tour/commit/fa93aac))
* use isFinished in previous/nextStep + reset isFinished when starting the tour ([b70c371](https://github.com/pulsardev/vue-tour/commit/b70c371))



<a name="1.0.0-beta.0"></a>
# 1.0.0-beta.0 (2018-02-22)


### Bug Fixes

* attempt to fix the demo ([da58bfc](https://github.com/pulsardev/vue-tour/commit/da58bfc))
* change the CircleCI configuration ([fd0f90e](https://github.com/pulsardev/vue-tour/commit/fd0f90e))
* change the PayPal link ([07658ce](https://github.com/pulsardev/vue-tour/commit/07658ce))
* fix tests and improve error handling ([a53b281](https://github.com/pulsardev/vue-tour/commit/a53b281))
* make the project build ([e0d3df4](https://github.com/pulsardev/vue-tour/commit/e0d3df4))
* prepare the build for a deployment on GitHub Pages ([e20cb1d](https://github.com/pulsardev/vue-tour/commit/e20cb1d))
* **ci:** change the environment for Cypress ([ef5a537](https://github.com/pulsardev/vue-tour/commit/ef5a537))
* **ci:** install dependencies as root ([e8c8e67](https://github.com/pulsardev/vue-tour/commit/e8c8e67))
* **ci:** revert the environment and install Cypress' dependencies ([80832c9](https://github.com/pulsardev/vue-tour/commit/80832c9))
* **ci:** run the webserver and start the e2e tests manually ([5ea7219](https://github.com/pulsardev/vue-tour/commit/5ea7219))


### Features

* add a minimal demo file to quickly test the build ([225a2e0](https://github.com/pulsardev/vue-tour/commit/225a2e0))
* change the build command to package the code as a library ([d875f43](https://github.com/pulsardev/vue-tour/commit/d875f43))
* change the text of the landing and the default style of steps ([48fb1b9](https://github.com/pulsardev/vue-tour/commit/48fb1b9))
* improve the layout of the demo ([0489c20](https://github.com/pulsardev/vue-tour/commit/0489c20))
* install the plugin automatically if Vue has been added to the global scope ([4f469c6](https://github.com/pulsardev/vue-tour/commit/4f469c6))
* minor variable declaration improvement ([262374f](https://github.com/pulsardev/vue-tour/commit/262374f))
* **ci:** copy and move folders to be ready for deployment ([ea8b089](https://github.com/pulsardev/vue-tour/commit/ea8b089))
