[![](https://img.shields.io/npm/v/@playkit-js/plugin-example/latest.svg)](https://www.npmjs.com/package/@playkit-js/plugin-example)
[![](https://img.shields.io/npm/v/@playkit-js/plugin-example/canary.svg)](https://www.npmjs.com/package/@playkit-js/plugin-example/v/canary)

# playkit-js-plugin-example

This is a template repository for kaltura-player plugins.
You can create a new plugin based on this template by using the "Use this template" menu.

Files and folders that need to be changed after cloning the repository:
- /README.md
- /package.json
- /webpack.config.js
- /cypress
- /demo
- /translations

Some other things to note:
Update this README file and add information about the plugin, note that the build status in the top of the file above needs to be updated to point to the build pipeline of your new plugin.

Search for all instance of the string "plugin-example" in the project.

Make sure to update the repository settings - teams, branch protection rules, autolink references and secrets.
You can copy the definition from any of our other repositories.
Adding secrets to the repository requires assistance from IT.
Don't forget to add the repository to [playkit-js-bump-release](https://github.com/kaltura/playkit-js-bump-release/edit/main/player-dependencies.txt).

## Features
    
## Getting started with development

```sh
# First, checkout the repository and install the required dependencies
git clone https://github.com/kaltura/playkit-js-plugin-example.git

# Navigate to the repo dir
cd playkit-js-plugin-example

# Run dev-server for demo page (recompiles on file-watch, and write to actual dist fs artifacts)
npm run dev

The dev server will host files on port 8000. Once started, the demo can be found running at http://localhost:8000/.

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

## API docs

## Usage guide

## Demo

## Compatibility

## License

This project is licensed under the AGPL-3.0 License - see the [LICENSE](LICENSE) file for details