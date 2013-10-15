# Sneaky-Talk - On a random interval, download and speak the contents of a file if that file has changed.
## PUrpose
THe sneaky-talk script  downloads a text file, and if that file has changed since the last download, the contents of the file is spoken with the Mac OSX say command.
Sneaky-talk loops a random number of seconds, from 1-6 minutes, inbetween downloads.
If the update_url variable is set in the script, sneaky-talk will also attempt to download and execute a new version of itself.
SNeaky-talk can be run with the -i option to install commands in the shell inintialization file to run itself when terminal launches. THe shell initialization file is backed up before editing.
Sneaky-talk will self-destruct if a certain string is contained in the text file to be spoken.
## Preparation for Use
* Review the variables at the top of the sneaky-talk script, at least sneakytalk_host which defines the web server that sneaky-talk uses to download the text file to speak, and (optionally) new copies of itself.
* Copy sneaky-talk to the web server which will also contain the text file to be spoken. Even if you do not plan to have sneaky-talk auto-update itself, having sneaky-talk on the web server can make the installation of sneaky-talk easier.

## Install Sneaky-talk
On the system which you would like to sneakily talk, download and install the:
curl -O http://ServerName/sneaky-talk/sneaky-talk
chmod 700 sneaky-talk
./sneaky-talk -i

By default, sneaky-talk downloads a file from the sneaky-talk sub-directory on the web server, named after the login name of the user running sneaky-talk. Create that file  with a .txt extension on the web server, and sneaky-talk will download and speak it's contents.
## Getting Rid of Sneaky-Talk
Sneaky-talk has a self-destruct string (run sneaky-talk -h to see this string). IF you put that string, and only that string, in the text file to be spoken, sneaky-talk will delete itself.

There will still be lines in the user's shell initialization file, but they will not do any harm; they will fail gracefully.

