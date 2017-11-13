interface LoginInfo {
    userName: String;
    password: String;
}

class ViewModel {
    private userName: KnockoutObservable<string>;
    private password: KnockoutObservable<string>;
    private result: KnockoutObservable<string>;

    constructor(userName: string, password: string, result: string) {
        this.userName = ko.observable(userName);
        this.password = ko.observable(password);
        this.result = ko.observable(result);
    }

    private login() {
        const ajaxSetting: JQueryAjaxSettings = {
            url: 'http://localhost:3000/api/v1/user/login', 
            data: {
                "userName": this.userName(),
                "password": this.password()
            }, 
            type: 'POST'
        };
        $.ajax(ajaxSetting)
            .done((data, status) => {
                this.result(data.status);
            })
        //location.hash = folder;
    }
}

ko.applyBindings(new ViewModel("admin35", "fasdfasd fs", ""));