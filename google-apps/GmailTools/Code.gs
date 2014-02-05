function trashOldDailyAgendas() {
  var searchString = '(from:google OR to:google) subject:"Daily Agenda for" older_than:1d';
  var threads = GmailApp.search(searchString);
  for (var i = 0; i < threads.length; i++) {
    var messages = threads[i].getMessages();
    for (var j = 0; j < messages.length; j++) {
      messages[j].moveToTrash();
    }
  }
};

function trashOldJiraUnClosed() {
  var searchString = 'subject:"[USGS-JIRA] Subscription: My Resolved & Unclosed" older_than:1d';
  var threads = GmailApp.search(searchString);
  for (var i = 0; i < threads.length; i++) {
    var messages = threads[i].getMessages();
    for (var j = 0; j < messages.length; j++) {
      messages[j].moveToTrash();
    }
  }
};

function trashCOMSONags() {
  var searchString = 'label:comso-nags older_than:1d';
  var threads = GmailApp.search(searchString);
  for (var i = 0; i < threads.length; i++) {
    var messages = threads[i].getMessages();
    for (var j = 0; j < messages.length; j++) {
      messages[j].moveToTrash();
    }
  }  
};
