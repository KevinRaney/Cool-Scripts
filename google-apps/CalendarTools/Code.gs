function removeAllReminders(calID,numDays) {
  var cal = CalendarApp.getCalendarById(calID);
  var now = new Date();
  var later = new Date(now.getTime() + (numDays * 24 * 60 * 60 * 1000));
  var events = cal.getEvents(now, later);  
  Logger.log('Number of events: ' + events.length);
  
  for (var i = 0; i < events.length; i++) {
    Logger.log(events[i].getTitle());
    var reminders = events[i].getPopupReminders();
    for (var j = 0; j < reminders.length; j++) {
      Logger.log(reminders[j]);
    }
    events[i].removeAllReminders();
  }
}
