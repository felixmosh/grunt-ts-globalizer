# grunt-ts-globalizer

[![Built with Grunt](https://img.shields.io/badge/Built%20with-GruntJS-yellow.svg?style=flat)](http://gruntjs.com/)
[![NPM version](https://img.shields.io/npm/v/grunt-ts-globalizer.svg?style=flat)](https://www.npmjs.com/package/grunt-ts-globalizer)

> Make TypeScript modules globally available in Node environment.


## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-ts-globalizer --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-ts-globalizer');
```


## The "tsGlobalizer" task

### Overview

In your project's Gruntfile, add a section named `tsGlobalizer` to the data object passed into `grunt.initConfig()`.

The wildcard selector `*` is perfectly valid for selecting targets to globalize.

```js
grunt.initConfig({
  tsGlobalizer: {
    taskName: {
      options: {
        pattern: /var ([^=;]+);/,
		variableName: 'global'
      },
      files: {
        src: [ 'path/to/file.ext', 'path/to/another/*.ext' ]
      }
    }
  }
})
```


### Options

#### options.pattern
Type: `String`
Default: `/var ([^=;]+);/`  

Globalize the file only if the pattern has group capture of the moduleName and has at least one match.

#### options.variableName
Type: `String`
Default: `global` 

The global variable name to register the module on. By default its registers the module on the Node global variable.

### Usage Examples

Usage examples can be found inside `Gruntfile.js` of the project. 


### Notes

`grunt-ts-globalizer` simply adds registration assignments to the head and the foot of the files that are specified by the array passed to `files.src`, 


## Contributing
In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
