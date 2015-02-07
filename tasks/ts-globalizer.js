/*
 * grunt-ts-globalizer
 * https://github.com/felixmosh/grunt-ts-globalizer
 *
 * Copyright (c) 2014 Matt Styles
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('tsGlobalizer', 'Make TypeScript modules globally available in Node environment', function () {
		// Set up defaults for the options hash
		var options = this.options({
			pattern: 'var ([^=;]+);',
			variableName: 'global'
		});

		var re = null;

		if (options.pattern) {
			re = new RegExp(options.pattern);
		}

		var linebreak = grunt.util.linefeed;

		// Iterate over the list of files and globalize it
		this.files.forEach(function (file) {
			file.src.forEach(function (src) {

				if (grunt.file.isFile(src)) {

					var fileContents = grunt.file.read(src);
					var moduleName = re.exec(fileContents);
					var replace;
					if (re && moduleName && moduleName.length > 1) {
						replace = moduleName[0];
						moduleName = moduleName[1];
					}
					else {
						return;
					}

					var header = moduleName + ' = ' + options.variableName + '.' + moduleName + ' || {};' + linebreak;
					var footer = options.variableName + '.' + moduleName + ' = ' + moduleName + ';' + linebreak;

					grunt.file.write(src,
						fileContents.replace(replace, replace + linebreak + header) + linebreak + footer
					);
					grunt.verbose.writeln(src.cyan + ' was globalized.');
				}

			});
		});

		grunt.log.writeln('✔'.magenta + ' grunt-ts-globalizer completed successfully');

	});

};
