/// <reference path="../../reference.ts" />

var varName;
varName = global.varName || {};

(function (moduleName) {
	var InnerClass = (function () {
		function InnerClass() {

		}

		InnerClass.prototype.method = function (string) {
		};
		return InnerClass;
	})();

	moduleName.class = innerClass;
})(varName || (varName = {}));

global.varName = varName;
