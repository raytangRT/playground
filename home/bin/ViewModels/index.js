class ViewModel {
    constructor(userName, password, result) {
        this.userName = ko.observable(userName);
        this.password = ko.observable(password);
        this.result = ko.observable(result);
    }
    login() {
        const ajaxSetting = {
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
        });
        //location.hash = folder;
    }
}
ko.applyBindings(new ViewModel("admin35", "fasdfasd fs", ""));

//# sourceMappingURL=index.js.map
