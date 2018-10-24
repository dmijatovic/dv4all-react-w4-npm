# dv4all-react-components-demo

Testing react components sharing as npm module.

## Install

```bash

  npm install --save dv4all-react-components-demo

```

## Use of library

For more information about how to use components clone this project from github and look at demo project.
Demo project has its own read.me file. In addition each component has its own readme file.

## Development

The project consists of two modules:

- `demo`: demonstrates use of library. It is used during development and it can be used to show basic use of library component
- `lib`: the source code of library itself

### Folder structure

- `dist`: contains compiled library code. This code should be used by npm.
- `demo`: contains example project. When developing new components use this project to view and test the component.
- `lib`: contains source code of library components. This is **main** project with its own folder structure. The lib folder should contains only library components. For viewing and testing use demo folder/project.
- `node_modules`: holds external dependencies for both projects. When importing new libraries using npm import define all dependencies as devDependencies.
- `webpack`: webpack configuration files for both projects. Webpack definitions are dynamically loaded based on env parameters passed in npm run command. Required env parameters are **env.wpf** (webpack partial file to load) and **env.api** (backend api proxy definitions to load). See scripts portion of package.json for exact implementation.


### NPM scripts

- `npm start`: runs example library using local configuration
- `npm run dev`: runs example library using test configuration
- `npm run acc`: runs example library using acceptance configuration
- `npm run demo`: runs example library using demo congiruation
- `npm run build:lib`: builds component library for use as npm package
- `npm run build:demo`: builds example project
- `npm run wp:dev`: starts webpack in debugging mode

### Configuration files

- `package.json`: defines dependencies for both projects and serves as main definition file of npm library. The main script is therefore set to `dist\index.js` which represents compiled library script. Important part of this file are:
    - **main**: it is used by npm to link main entry file of component library. It should point to compiled version of library using webpack **commonjs2** target.
    - **browserlist**: defines browser support target. This information is used by babel and postcss to apply required plugins and css prefixes. Note that this is not the only place where these definitions are store. Babel and postcss have there definition files.
    - **scripts**: scripts you can run using `npm run {scriptname}`. See NPM scripts section for more details
    - **peerDependencies**: defines library's dependencies. This is very important definition. It describes which libraries are not included in this package but are required by this library in order to work properly. This section is mananged manually so ensure when adding new dependencies to the project that this section is also update to properly reflect lib requirements
    - **devDependencies**: defines required libraries in order to be able to develop this project. Note that all dependencies are defined as devDependencies. This is because we do not want to include React into our package as we defined React as one of peerDependencies. It is very important to properly define peerDependencies (required but not included in the package), devDependencies (used during development but not included in the package) and dependencies (included in the package). The difference between these three is very important and should be properly handled
- `.babelrc`: babel preset definitions. Note that we use new babel v7 definitions which differ from version 6. This files defines which new ES features should be supported and transpiled to ES5 during build process. Currently basic ES6/ES7 stanards are included. For more information see [babel website](https://babeljs.io/docs/en/babel-preset-env).
- `.editorconfig`: defined basic editor configuration for this project. More information and how to apply can be found [here](https://editorconfig.org/)
- `.eslintrc`: basic eslint definitions
- `.gitignore`: definitions which files and folders should be ignored by git (not included in version control). Currently basic JS development and temp files of major OS-es are included.
- `postcss.config.js`: postcss plugin definitions used by webpack. Currently we use autoprefixer. Note that postcss-plugin is also required to connect webpack and postcss. More information about postcss plugins can be found [here](https://postcss.org/)
- `webpack.config.js`: main webpack configuration file. This is entry point of webpack. In this file we select which files and definitions to load from webpack folder.


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

## Publishing library to npm

```bash
  # login to npm with you credentials
  npm login

  # publish
  npm publish
```

NOTE! If you get error during publishing about package name spam detection - DO NOT USE NUMBERS IN THE PROJECT NAME.

```bash
npm ERR! publish Failed PUT 403
npm ERR! code E403
npm ERR! Package name triggered spam detection; if you believe this is in error, please contact support@npmjs.com : dv4all-react-w4-npm
```

### Upgrade package

npm version command will increase version number in package.json.

Note! in all cases this action will add git tag to your repo if is linked

```bash
  # patch update
  # from 1.0.0 -> 1.0.1
  npm version patch

  # minor update
  # from 1.0.0 -> 1.1.0
  npm version minor

  # major update
  # from 1.0.0 -> 2.0.0
  npm version major

```

## Local linking




## License

MIT © [dv4all](https://github.com/dmijatovic)
