/*
 * grunt-smooshjs
 * https://github.com/Kenoshen/grunt-smooshjs
 *
 * Copyright (c) 2015 Michael Wingfield
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('smooshjs', 'Grunt plugin for the smooshjs project', function() {
        console.log("THIS: " + JSON.stringify(this));
        var data = this.data;

        console.log(data.in);
        console.log(data.out);
        console.log(data.cjs);
        console.log(data.amd);
    });

};