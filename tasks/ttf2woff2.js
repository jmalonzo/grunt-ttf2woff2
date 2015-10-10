/*
 * grunt-ttf2woff2
 * https://github.com/jmalonzo/grunt-ttf2woff2
 *
 * Copyright (c) 2015 Jan Alonzo
 * Licensed under the MIT license.
 */

'use strict';

var fs = require("fs");
var path = require("path");
var ttf2woff2 = require("ttf2woff2");

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks
  grunt.registerMultiTask('ttf2woff2', 'Converts a TTF font to a WOFF2 font', function() {
    // Iterate over all specified file groups.
    this.files.forEach(function(files) {
      var src = files.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      });
      src.forEach(function(f) {
        var ext = path.extname(f),
            ttfName = path.basename(f, ext),
            woffFile = path.join(files.dest, ttfName) + ".woff2";

        try {
          grunt.file.write(woffFile, ttf2woff2(fs.readFileSync(f)));
          grunt.log.ok("Converted '" + f + "' to '" + woffFile + "'");
        } catch (error) {
          grunt.log.fail(error.message);
        }
      });
    });
  });

};
