# grunt-smooshjs

> Grunt plugin for the smooshjs project

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-smooshjs --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-smooshjs');
```

## The "smooshjs" task

### Overview
In your project's Gruntfile, add a section named `smooshjs` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    smooshjs: {
        myMainApp: {
            in: "path/to/entryPoint.js",
            out: "path/to/output.js",
            cjs: true, // should it output as common js?
            amd: false // should it output as AMD?
        },
        myOtherApp: {
            in: "path/to/entryPoint.js", // 'in' is required, 'out' is not
            cjs: true, // you must have at least one of these set to true
        },
        myOtherOtherApp: {
            in: "path/to/entryPoint.js",
            out: "path/to/output", // out can also be a directory
            cjs: true, // both cjs and
            amd: true, // amd options can be true
        },
    },
});
```
