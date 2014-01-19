# OSX-SOCKS5-Proxy - Manage SOCKS5 Proxy Settings
## Purpose
Use the command-line to setup, enable, disable, or get the status of SOCKS5 proxy settings in the Mac OSX Network Preferences, including the managment of an SSH connection which provides the SOCKS5 proxy.
## Installation and Use
* Copy the proxy script to a directory in your path.
* Run the proxy script with no arguments, to get usage information.
* Create a configuration file, ~/.s5proxyrc, containing atleast
ssh_host="server.com"
- This is the SSH server which your proxied traffic will go through.
proxy_interface='airport'
- ONly if you are not using ethernet
* COnfigure the Mac OSX proxy preferences by running: s5proxy setup
* ENable the proxy with: s5proxy on
* Get proxy status, including whether the SSH connection is established, with: s5proxy status
* Disable the proxy when done using it, with: s5proxy off

## Configuration File Rename
If you previously used a configuration file, ~/.s5proxyrc, please rename this to ~/.s5proxy (no "rc" in the name).

## Secondary Configuration File
THe first command-line parameter passed to this script, will be appended to the configuration file name, and that secondary configuration file will also be read. E.G. s5proxy work on will read ~/.s5proxy, and then ~/.s5proxy.work

This allows you to override variables like ssh_host and proxy_interface, for variations in your environment.

IF you are already using a proxy, and you run "proxy another_environment on" the current ssh connection will be killed, and a new SSH connection will be established.

