# grunt-ttf2woff2

> Converts a TTF font to a WOFF2 font

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-ttf2woff2 --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-ttf2woff2');
```

## The "ttf2woff2" task

### Overview
In your project's Gruntfile, add a section named `ttf2woff2` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  ttf2woff2: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Usage Examples

In this example, we are converting TTF fonts stored in `fonts/` and save the converted WOFF2 font to `build/fonts`.

```js
grunt.initConfig({
  ttf2woff2: {
    default: {
      src: ["fonts/*"],
      dest: "build/fonts"
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

* 1.0.0 - Initial Release