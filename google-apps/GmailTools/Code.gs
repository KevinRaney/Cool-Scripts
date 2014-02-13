function trashMessages(searchString) {
  var threads = GmailApp.search(searchString);
  for (var i = 0; i < threads.length; i++) {
    var messages = threads[i].getMessages();
    for (var j = 0; j < messages.length; j++) {
      messages[j].moveToTrash();
    }
  }
};

function archiveMessages(searchString) {
  var threads = GmailApp.search(searchString);
  for (var i = 0; i < threads.length; i++) {
    threads[i].moveToArchive();
  }
};
