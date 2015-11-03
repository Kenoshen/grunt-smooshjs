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
        try {
            // check that the smooshjs module exists
            require.resolve("smooshjs");
        } catch(e) {
            grunt.fail.fatal("smooshjs module was not found, install using 'npm install smooshjs' or add as a dev-dependency 'npm install smooshjs --save-dev'", 1);
        }

        var smooshjs = require("smooshjs");

        // get the required arguments and provide defaults
        var cmd = {
            in: (this.data.in || ""),
            out: (this.data.out || ""),
            cjs: (this.data.cjs ? "-cjs " : ""),
            amd: (this.data.amd ? "-amd " : "")
        };

        // run the smoosh command and capture the output
        var output = smooshjs(cmd.cjs + " " + cmd.amd + " " + cmd.in + " " + cmd.out);

        // check the output code, anything other than 0 indicates an error
        if (output.code !== 0){
            grunt.fail.fatal(output.output, output.code);
        }
    });

};