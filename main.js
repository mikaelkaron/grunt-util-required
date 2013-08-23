/*
 * grunt-util-required
 * https://github.com/mikaelkaron/grunt-util-required
 *
 * Copyright (c) 2013 Mikael Karon
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
	"use strict";

	var _ = grunt.util._;

	return function () {
		var me = this;

		var count = _.reduce(arguments, function (accumulator, property) {
			if (!_.has(me, property)) {
				accumulator++;
				grunt.log.error("Property '" + property.cyan + "' is missing");
			}

			return accumulator;
		}, 0);

		if (count !== 0) {
			grunt.fail.warn(count > 0 ? "Required properties missing." : "Required property missing.");
		}
	};
}