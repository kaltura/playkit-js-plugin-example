[![Build Status](https://app.travis-ci.com/kaltura/playkit-js-plugin-example.svg?branch=master)](https://app.travis-ci.com/kaltura/playkit-js-plugin-example)
[![](https://img.shields.io/npm/v/@playkit-js/plugin-example/latest.svg)](https://www.npmjs.com/package/@playkit-js/plugin-example)
[![](https://img.shields.io/npm/v/@playkit-js/plugin-example/canary.svg)](https://www.npmjs.com/package/@playkit-js/plugin-example/v/canary)

# playkit-js-plugin-example

playkit-js-plugin-example is a [kaltura player] plugin that groups several UI services,
in order to simplify and facilitate the customization of the [kaltura player] UI by providing a simple and clean API.

Each service manages a different area of UI functionality.

It relies on [kaltura player] core API for managing UI features.

playkit-js-plugin-example is written in [ECMAScript6] (`*.js`) and [TypeScript] (`*.ts`) (strongly typed superset of ES6), 
and transpiled in ECMAScript5 using [Babel](https://babeljs.io/) and the [TypeScript compiler].

[Webpack] is used to build the distro bundle and serve the local development environment.

[kaltura player]: https://github.com/kaltura/kaltura-player-js.
[ecmascript6]: https://github.com/ericdouglas/ES6-Learning#articles--tutorials
[typescript]: https://www.typescriptlang.org/
[typescript compiler]: https://www.typescriptlang.org/docs/handbook/compiler-options.html
[webpack]: https://webpack.js.org/

## Features

  Write here your plugin description...
    
## Getting started with development

```sh
# First, checkout the repository and install the required dependencies
git clone https://github.com/kaltura/playkit-js-plugin-example.git

# Navigate to the repo dir
cd playkit-js-plugin-example

# Run dev-server for demo page (recompiles on file-watch, and write to actual dist fs artifacts)
npm run dev

# Before submitting a PR - Run the pre commit command
npm run pre:commit

# this command will run:

# 1. types check
# 2. lint check
# 3. generate/update types
# 4. generate/update docs
```

The dev server will host files on port 8000. Once started, the demo can be found running at http://localhost:8000/.

Before submitting a PR, please see our [contribution guidelines](CONTRIBUTING.md).


### Linter (ESlint)

Run linter:

```
npm run lint:check
```

Run linter with auto-fix mode:

```
npm run lint:fix
```

### Formatting Code

Run prettier to format code

```
npm run prettier:fix
```

### Type Check

Run type-check to verify TypeScript types

```
npm run types:check
```

### Automated tests (Mocha/Karma)

Run all tests at once:

```
npm test
```

Run unit tests in watch mode:

```
npm run test:watch
```

## Design

An overview of this project's design, can be found [here](https://kaltura.atlassian.net/wiki/spaces/PROD/pages/3554412657/Side+Panel+Manager+-+Design+Document).

## API docs

[API docs](https://kaltura.github.io/playkit-js-plugin-example/docs/api/index.html)

## Usage guide

[usage guide](./docs/guide.md)

## Demo

[https://kaltura.github.io/playkit-js-plugin-example/demo/index.html](https://kaltura.github.io/playkit-js-plugin-example/demo/index.html)


## Compatibility

playkit-js-plugin-example is only compatible with browsers supporting MediaSource extensions (MSE) API with 'video/MP4' mime-type inputs.

playkit-js-plugin-example is supported on:

- Chrome 39+ for Android
- Chrome 39+ for Desktop
- Firefox 41+ for Android
- Firefox 42+ for Desktop
- IE11 for Windows 8.1+
- Edge for Windows 10+
- Safari 8+ for MacOS 10.10+
- Safari for ipadOS 13+

## License

playkit-js-plugin-example is released under [Apache 2.0 License](LICENSE)