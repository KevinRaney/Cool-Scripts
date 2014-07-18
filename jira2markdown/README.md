# Jira2Markdown
## Introduction
This script converts Atlassian Jira style markup, into markdown.

Only a subset of Jira markup is currently supported

* Numbered lists, including nested lists.
* Headings - lines starting with h1. h2. Etc.
* Links, both [http://google.com] and [Google|http://google.com] style

## Sample Usage
The j2md script reads from standard input, and outputs to standard output.

`cat fromJira.txt |./j2md >file.md`

IF you have Jira markup in the OSX clipboard, you can use:

`pbpaste |./j2md >file.md`

