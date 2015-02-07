/// <reference path="../../reference.ts" />

var varName;
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
