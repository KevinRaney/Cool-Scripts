function syncContactsToDistro() {
 
  var distroName = 'newstest'
  var group = GroupsManager.getGroup(distroName);
  var groupMembers = group.getAllMembers()
  var allContacts = ContactsApp.getContacts()

  //delete all existing group members
  for (var member in groupMembers) {
    group.removeMember(groupMembers[member]);
  }
  
  //add email addresses back as members from contacts
  for (var contact in allContacts) {
    var emails = allContacts[contact].getEmails()
        
    //decide if the contact should be skipped
    if (allContacts[contact].getCustomFields('NewsOptOut').length >= 1.0) {
      //Skipping this contact because it has the NewsOptOut field set
    } else {
        
      //add email address if there is only one for a contact
      if (emails.length == 1.0) {
        group.addMember(emails[0].getAddress());
      } else {
        for (var email in emails) {
          //If there is more than one email address per contact, Add only home email addresses, skip others.
          if (emails[email].getLabel() == ContactsApp.Field.HOME_EMAIL) {
            group.addMember(emails[email].getAddress());
          }
        }
      }
   } 
  }
}
