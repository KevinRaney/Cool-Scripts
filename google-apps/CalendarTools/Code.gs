function removeAllReminders(calID,numDays) {
/**************************************************************************************** 

PURPOSE: Find events that are on a provided calendar and remove all reminders.

Paramaters:
numDays - is the number of days in the future to look for event matches

****************************************************************************************/
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

function autoInviteGuestAndMakePublic(calID,guestCalID,numDays,titlePrefix,keywordList) {
/**************************************************************************************** 

PURPOSE: Find events that are not private match the titlePrefix and contain the provided 
         keywords. Then invite the provided guest calendar to the event and make the event public.

Paramaters:
numDays - is the number of days in the future to look for event matches
titlePrefix - is the string that must match the beginning of the event title, to ignore 
              the titlePrefix match, pass a zero length string.
keywordList - is a string containing words to match, separated by spaces

****************************************************************************************/

  var cal = CalendarApp.getCalendarById(calID);
  var now = new Date();
  var later = new Date(now.getTime() + (numDays * 24 * 60 * 60 * 1000));
  var events = cal.getEvents(now, later);  
  var keywords = keywordList.split(' ');
  
  for (var i = 0; i < events.length; i++) {
    var title = events[i].getTitle();

    if (events[i].getVisibility() != CalendarApp.Visibility.PRIVATE && title.substring(0,titlePrefix.length).toLowerCase() == titlePrefix.toLowerCase()) {
      for (var w in keywords) {
        if (title.toLowerCase().indexOf(keywords[w].toLowerCase()) != -1) {
          Logger.log("Found eligible event: %s",title);
          if (!events[i].getGuestByEmail(guestCalID)) {  
            events[i].addGuest(guestCalID);
          }
          if (events[i].getVisibility() != CalendarApp.Visibility.PUBLIC) { 
            events[i].setVisibility(CalendarApp.Visibility.PUBLIC);
          }
        }
      }
    }
  }
}

