function trashOldDailyAgendas() {
  trashMessages('(from:google OR to:google) subject:"Daily Agenda for" older_than:1d');
};

function trashOldJiraUnClosed() {
  trashMessages('subject:"[USGS-JIRA] Subscription: My Resolved & Unclosed" older_than:1d');
};

function trashCOMSONags() {
  trashMessages('label:comso-nags older_than:1d');
};

function archiveOldNagiosErrors() {
  archiveMessages('label:system-alerts-nagios older_than:1h in:inbox');
}
