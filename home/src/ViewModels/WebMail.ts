import * as ko from "knockout"
import * as sammy from "sammy"
import * as $ from "jquery"

interface Mail {
    folder: string,
    id: string
}

class WebMailViewModel {

    readonly folders = ['Inbox', 'Archive', 'Sent', 'Spam']

    public chosenFolderId: KnockoutObservable<string>;
    public chosenFolderData: KnockoutObservable<any>;
    public chosenMailData: KnockoutObservable<any>;

    public application: sammy.Application;

    constructor() {
        this.chosenFolderId = ko.observable();
        this.chosenFolderData = ko.observable();
        this.chosenMailData = ko.observable();

        this.application = sammy()
            .get("#:folder", (context: sammy.EventContext) => {
                let folderId = context.params.folder;
                this.chosenFolderId(folderId);
                this.chosenMailData(null);
                $.ajax("http://learn.knockoutjs.com/mail", {
                    data: {
                        folder: folderId
                    },
                    dataType: "jsonp",
                    crossDomain: true,
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "GET"
                    }, 
                    xhrFields: { withCredentials: true }
                }).done((data: any) => {
                    this.chosenFolderData($.parseJSON(data));
                });
            })
            .get("#:folder/:mailId", (context: sammy.EventContext) => {
                let folderId = context.params.folder;
                let mailId = context.params.mailId;
                this.chosenFolderId(folderId);
                this.chosenFolderData(null);
                $.get("http://learn.knockoutjs.com/mail", { mailId: mailId }, this.chosenMailData);
            })
            .get("", () => {
                this.application.runRoute('get', '#Inbox');
            }).run();
    }

    private goToFolder(folder: string) {
        location.hash = folder;
    }

    private goToMail(mail: Mail) {
        location.hash = mail.folder + '/' + mail.id;
    }
}

ko.applyBindings(new WebMailViewModel())