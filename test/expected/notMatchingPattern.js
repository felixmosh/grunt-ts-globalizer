/// <reference path="../../reference.ts" />

var moduleName = {};
(function (moduleName) {
	var InnerClass = (function () {
		function InnerClass() {

		}

		InnerClass.prototype.method = function (string) {
		};
		return InnerClass;
	})();

	moduleName.class = innerClass;
})(moduleName || (moduleName = {}));