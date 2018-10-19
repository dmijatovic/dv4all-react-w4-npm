# dv4all-react-comp-test

Testing react components sharing as npm module.

## Install

```bash

  npm install --save dv4all-react-w4-npm

```

## Use of library

For more information about how to use components take a look at demo project.
This project has its own read.me file. In addition each component has its own readme file.

## Development

The project consists of two modules:

- examples: demonstrates use of library. It is used during development and it can be used to show basic use of library component
- lib: the source code of library itself

### Project structure

- dist: contains compiled library code. This code is used
- example: contains example project codebase. This is separate side crate-react-app project with its own folderstructure
- lib: contains source code of library components. This is main project with its own folder structure
- node_modules: dependencies for both projects
- webpack: webpack configuration files for both projects

### NPM scripts

- npm start: runs example library using local configuration
- npm run dev: runs example library using test configuration
- npm run acc: runs example library using acceptance configuration
- npm run demo: runs example library using demo congiruation
- npm run build:lib: builds component library for use as npm package
- npm run build:demo: builds example project
- npm run wp:dev: starts webpack in debugging mode

## Debugging webpack

Webpack can be debugger using chrome dev tools. It is node.js app and the approach is similair to any node.js app. Open Chrome and go to chrome://inspect/#devices
Run webpack in inspect mode and debug window should open. As with any debugger you can set debuggin point using keywoard `debugger` in the script.

To break out of debugging mode use Ctrl+C (Cmd+C) twice.

```bash
  # start webpack in inspect mode
  node inspect ./node_modules/webpack/bin/webpack.js

  #set debugger
  debugger

  # use ctl + C to stop

```

## License

MIT © [dmijatovic](https://github.com/dmijatovic)
