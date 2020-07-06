# react-lightsaber

Just a simple lightsaber hosted on npmjs

## Getting Started

## Why `react-lightsaber`?

I develop this library to be more confident with `rollup`, `storybook`, `gulp` and `sass`. Initially in the company I worked in, we need to create reusable component based on a palette that can skin any component. At first this project was a proof of concept, over time our internal library has become our design system used by 3 projects.

## Demo

[Take a look on our storybook.](https://arnaud-zg.github.io/react-lightsaber/)

### Prerequisites

Recommended environment:

- `Node 8`

### Installing

The best way to install and use `react-lightsaber` is with `npm` or `yarn`.

```sh
$ npm install react-lightsaber
```

You can also use `yarn`.

```sh
$ yarn add react-lightsaber
```

#### Releases

You can manually download `react-lightsaber`
from [releases](https://github.com/arnaud-zg/react-lightsaber/releases).

#### From sources

If you want to use the development version of the library, build from source
manually. The development version may be unstable.

```
$ git clone git@github.com:arnaud-zg/react-lightsaber.git
$ cd react-lightsaber
$ npm install
$ npm run build:style
$ npm run build:library
```

## How to use

### Component

```
import ReactLightsaber from 'react-lightsaber'
```

### Style

Our main `css` file is located here 'react-lightsaber/index.css'.

## Running the tests

Run the automated tests for this system

### Break down into end to end tests

This project use `jest` for unit test.

```sh
npm run test
```

If you want to have enable coverage report.

```sh
npm run test:coverage
```

### And coding style tests

This project use `prettier`, `tslint`, `eslint` for coding style tests.

```sh
npm run format
```

## Deployment

This project use `Travis CI` for continuous deployment.

## Built With

- [Typescript](https://www.typescriptlang.org/) - Typescript

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- **Arnaud Zheng** - _Initial work_ - [arnaud-zg](https://github.com/arnaud-zg)

See also the list of [contributors](https://github.com/arnaud-zg/react-lightsaber/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
