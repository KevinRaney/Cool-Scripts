# OSX-SOCKS5-Proxy - Manage SOCKS5 Proxy Settings
## Purpose
Use the command-line to setup, enable, disable, or get the status of SOCKS5 proxy settings in the Mac OSX Network Preferences, including the managment of an SSH connection which provides the SOCKS5 proxy.
## Installation and Use
* Copy the proxy script to a directory in your path.
* Run the proxy script with no arguments, to get usage information.
* Create a configuration file, ~/.s5proxyrc, containing atleast
ssh_host="server.com"
- This is the SSH server which your proxied traffic will go through.
* COnfigure the Mac OSX proxy preferences by running: s5proxy setup
* ENable the proxy with: s5proxy on
* Get proxy status, including whether the SSH connection is established, with: s5proxy status
* Disable the proxy when done using it, with: s5proxy off

