define(["require", "exports", "knockout", "sammy", "jquery"], function (require, exports, ko, sammy, $) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class WebMailViewModel {
        constructor() {
            this.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
            this.chosenFolderId = ko.observable();
            this.chosenFolderData = ko.observable();
            this.chosenMailData = ko.observable();
            this.application = sammy()
                .get("#:folder", (context) => {
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
                }).done((data) => {
                    this.chosenFolderData($.parseJSON(data));
                });
            })
                .get("#:folder/:mailId", (context) => {
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