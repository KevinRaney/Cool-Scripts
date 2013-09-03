/************************************************************************************************************
 Author: Kevin R. Raney
Updated: Feb 26, 2013
Purpose: To automatically manage server info pages on CSAS Systems site by creating/deleting the 
         appropriate page nested under the servers page by cross referencing existing google docs. This 
         runs every 1/2 hour to keep the CSAS Systems site up to date.
************************************************************************************************************/

function refreshPagesForEachServerDoc () {
  var notify = 'gs-b-cbi_denver_system_admins@usgs.gov';
  var siteUrl = 'https://sites.google.com/a/usgs.gov/csassys/'; //needs a trailing forward slash
  var site = SitesApp.getSiteByUrl(siteUrl);
  var serverDocs = DocsList.getFolderById('0B9pMUNClmM61RlFrMnNUU0ZnZ2c').getFiles();
  var serverPageUrl = 'servers/'; //needs a trailing forward slash
  var serverPage = SitesApp.getPageByUrl(siteUrl + serverPageUrl);
  var existingServerSitePages = serverPage.getChildren();
  var deleteExistingServerSitePages = false; //used to rebuild all server pages

  //delete all server pages
  if (deleteExistingServerSitePages) {
    for (i in existingServerSitePages) {
      existingServerSitePages[i].deletePage();
    }
  }
  
  //Look for docs that are missing pages
  for (i in serverDocs) {
    if (serverDocs[i].getName().indexOf('z Template') == -1 && (serverPage.getChildByName(serverDocs[i].getName()) == null || serverPage.getChildByName(serverDocs[i].getName()).isDeleted())) {
      var pageContent = '<iframe width="100%" height="500px" src="https://docs.google.com/a/usgs.gov/document/d/' + serverDocs[i].getId() + '/edit?embedded=true"></iframe>'
      serverPage.createWebPage(serverDocs[i].getName(), serverDocs[i].getName(), pageContent);
      if (!deleteExistingServerSitePages) {
        MailApp.sendEmail(notify,'CSAS Systems - Server Doc Added: ' + serverDocs[i].getName(),siteUrl + serverPageUrl + serverDocs[i].getName());
      }
    }
  }
  
  // Look for pages that are missing a doc
  var currentServerSitePages = serverPage.getChildren();

  for (i in currentServerSitePages) {
    var hasDoc = false;
    for (j in serverDocs) {
      if (serverDocs[j].getName() == currentServerSitePages[i].getName()) {
        hasDoc = true;
      }
    }
    
    if (!hasDoc) {
      currentServerSitePages[i].deletePage();
      if (!deleteExistingServerSitePages) {
        MailApp.sendEmail(notify,'CSAS Systems - Server Doc Deleted: ' + currentServerSitePages[i].getName(),currentServerSitePages[i].getUrl());
      }
    }
  } 
}
