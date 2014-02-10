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

function trashOldDailyAgendas() {
  trashMessages('(from:google OR to:google) subject:"Daily Agenda for" older_than:1d');
};

function trashOldJiraUnClosed() {
  trashMessages('subject:"[USGS-JIRA] Subscription: My Resolved & Unclosed" older_than:1d');
};

function trashCOMSONags() {
  trashMessages('label:comso-nags older_than:1d');
};
