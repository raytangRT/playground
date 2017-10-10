define(["require", "exports", "knockout"], function (require, exports, ko) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ViewModel = /** @class */ (function () {
        function ViewModel(language, framework) {
            this.language = ko.observable(language);
            this.framework = ko.observable(framework);
        }
        return ViewModel;
    }());
    ko.applyBindings(new ViewModel("12", "13"));
});
//# sourceMappingURL=main.js.map