define(["require", "exports", "knockout", "jquery"], function (require, exports, ko, $) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
    class WebMailViewModel {
        constructor() {
            this.chosenFolderId = ko.observable();
            this.chosenFolderData = ko.observable();
            this.chosenMailData = ko.observable();
            this.application = Sammy()
                .get("#:folder", (context) => {
                let folderId = context.params['folder'];
                this.chosenFolderId(folderId);
                this.chosenMailData(null);
                $.get("http://learn.knockoutjs.com/mail", { folder: folderId }, this.chosenFolderData);
            })
                .get("#:folder/:mailId", (context) => {
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
        goToFolder(folder) {
            location.hash = folder;
        }
        goToMail(mail) {
            location.hash = mail.folder + '/' + mail.id;
        }
    }
    ko.applyBindings(new WebMailViewModel());
});
//# sourceMappingURL=WebMail.js.map