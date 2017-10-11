import * as ko from "knockout"
import { Application, EventContext } from "sammy"
import * as $ from "jquery"

const folders = ['Inbox', 'Archive', 'Sent', 'Spam'];


interface Mail {
    folder: string,
    id: string
}

class WebMailViewModel {
    chosenFolderId: KnockoutObservable<string>;
    chosenFolderData: KnockoutObservable<any>;
    chosenMailData: KnockoutObservable<any>;

    application: Application;

    constructor() {
        this.chosenFolderId = ko.observable();
        this.chosenFolderData = ko.observable();
        this.chosenMailData = ko.observable();

        this.application = Sammy()
            .get("#:folder", (context: EventContext) => {
                let folderId = context.params['folder'];
                this.chosenFolderId(folderId);
                this.chosenMailData(null);
                $.get("http://learn.knockoutjs.com/mail", { folder: folderId }, this.chosenFolderData);
            })
            .get("#:folder/:mailId", (context: EventContext) => {
                let folderId = context.params["folder"];
                let mailId = context.params["mailId"];
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