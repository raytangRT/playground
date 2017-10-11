define(["require", "exports", "knockout"], function (require, exports, ko) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ViewModel {
        constructor(language, framework) {
            this.language = ko.observable(language);
            this.framework = ko.observable(framework);
        }
    }
    ko.applyBindings(new ViewModel("12", "13"));
});
//# sourceMappingURL=index.js.map