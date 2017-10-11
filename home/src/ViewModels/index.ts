import * as ko from "knockout"

class ViewModel {
    private language: KnockoutObservable<string>
    private framework: KnockoutObservable<string>

    constructor(language: string, framework: string) {
        this.language = ko.observable(language);
        this.framework = ko.observable(framework);
    }
}

ko.applyBindings(new ViewModel("12", "13"));