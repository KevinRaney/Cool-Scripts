# Git Trix - Things Your Dad Didn't Teach/Give You
These are git aliases, and shell functions / scripts to help you in your git life.
##set_git_author_from_parent_shell
This function walks up the process tree from your current PID, until it finds a process which is not run as the same user as the current PID, nor running as root. The variables GIT_AUTHOR_NAME, GIT_AUTHOR_EMAIL, GIT_COMMITTER_NAME, and GIT_COMMITTER_EMAIL are then set using the user's gecos field, and username@$email_domain.

You should set the $email_domain variable in this function, which will be used for email addresses.
##setPrompt
This should be sourced in your profile and will modify your prompt to show your username hostname working directory and if you're in a git repo will show the branch you're on and if its a clean working directory or not.
##git-completion.bash
This will provide git bash completion.
