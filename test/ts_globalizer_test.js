'use strict';

var grunt = require( 'grunt' );


exports.tests = {
    defaultParams: function ( test ) {
        test.expect( 1 );

        var actual = grunt.file.read( 'test/tmp/default.js' );
        var expected = grunt.file.read( 'test/expected/default.js' );

        test.equal( actual, expected, 'should globalize a file with default params' );

        test.done();
    },
	notMatchingPattern: function ( test ) {
		test.expect( 1 );

		var actual = grunt.file.read( 'test/tmp/notMatchingPattern.js' );
		var expected = grunt.file.read( 'test/expected/notMatchingPattern.js' );

		test.equal( actual, expected, 'should not globalize a file without matching the pattern' );

		test.done();
	},
	withPattern: function ( test ) {
		test.expect( 1 );

		var actual = grunt.file.read( 'test/tmp/withPattern.js' );
		var expected = grunt.file.read( 'test/expected/withPattern.js' );

		test.equal( actual, expected, 'should globalize a file with given pattern' );

		test.done();
	},
	withPatternWithoutCapture: function ( test ) {
		test.expect( 1 );

		var actual = grunt.file.read( 'test/tmp/withPatternWithoutCapture.js' );
		var expected = grunt.file.read( 'test/expected/withPatternWithoutCapture.js' );

		test.equal( actual, expected, 'should not globalize a file with given pattern without capture' );

		test.done();
	},
	withVariable: function ( test ) {
		test.expect( 1 );

		var actual = grunt.file.read( 'test/tmp/withVariable.js' );
		var expected = grunt.file.read( 'test/expected/withVariable.js' );

		test.equal( actual, expected, 'should globalize a file with given variable name' );

		test.done();
	}
};
