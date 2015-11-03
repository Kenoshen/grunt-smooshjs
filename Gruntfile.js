/*
 * grunt-smooshjs
 * https://github.com/Kenoshen/grunt-smooshjs
 *
 * Copyright (c) 2015 Michael Wingfield
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        "Gruntfile.js",
        "tasks/*.js"
      ],
      options: {
        jshintrc: ".jshintrc"
      }
    },
    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ["tmp"]
    },
    smooshjs: {
      first: {
          in: "file1.js",
          out: "file1.out.js",
          cjs: true,
          amd: true
      },
      second: {
          in: "file2.js",
          amd: true
      }
    }
  });

  // Actually load this plugin"s task(s).
  grunt.loadTasks("tasks");

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-clean");

  // By default, lint and run all tests.
  grunt.registerTask("default", ["clean", "jshint"]);

};
