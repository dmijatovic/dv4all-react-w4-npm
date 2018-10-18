# dv4all-react-comp-test

> testing react components npm module

[![NPM](https://img.shields.io/npm/v/dv4all-react-comp-test.svg)](https://www.npmjs.com/package/dv4all-react-comp-test) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save dv4all-react-comp-test
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'dv4all-react-comp-test'

class Example extends Component {
  render () {
    return (
      <MyComponent />
    )
  }
}
```


## Development

The project consists of two modules:
- examples: demonstrates use of library. It is used during development and it can be used to show basic use of library component
- lib: the source code of library itself


### Project structure

This project follows the

- dist: contains compiled library code
- example: contains example project codebase. This is separate side crate-react-app project with its own folderstructure
- lib: contains source code of library components. This is main project with its own folder structure
- node_modules: library dependencies
- webpack: webpack configuration files



## Debugging webpack

Via chrome dev tools webpack can be debugged similair to frontend code.

Open Chrome and go to chrome://inspect/#devices
Then run webpack in inspect mode

```bash
  # start webpack in inspect mode
  node inspect ./node_modules/webpack/bin/webpack.js

  #set debugger 

  # use ctl + C to stop
```

## License

MIT © [dmijatovic](https://github.com/dmijatovic)
