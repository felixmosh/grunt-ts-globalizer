/*
 * grunt-ts-globalizer
 * https://github.com/felixmosh/grunt-ts-globalizer
 *
 * Copyright (c) 2014 Matt Styles
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function ( grunt ) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['test/tmp']
        },

        copy: {
            tests: {
                expand: true,
                cwd: 'test/fixtures/',
                src: '**',
                dest: 'test/tmp/'
            }
        },

        appConfig: {
            def: 'STRING'
        },

        // Configuration to be run (and then tested).
        tsGlobalizer: {
            defaultParams: {
                files: {
                    src: [ 'test/tmp/default.js' ]
                }
            },
			notMatchingPattern: {
				files: {
					src: [ 'test/tmp/notMatchingPattern.js' ]
				}
			},
			withPattern: {
				files: {
					src: [ 'test/tmp/withPattern.js' ]
				},
				options: {
					pattern: 'var (varName);'
				}
			},
			withPatternWithoutCapture: {
				files: {
					src: [ 'test/tmp/withPatternWithoutCapture.js' ]
				},
				options: {
					pattern: 'var varName;'
				}
			},
			withVariable: {
				files: {
					src: [ 'test/tmp/withVariable.js' ]
				},
				options: {
					variableName: 'exports'
				}
			}
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js']
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['jshint', 'clean', 'copy', 'tsGlobalizer', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['test']);

};
