# OSX-SOCKS5-Proxy - Manage SOCKS5 Proxy Settings
## Purpose
Use the command-line to setup, enable, disable, or get the status of SOCKS5 proxy settings in the Mac OSX Network Preferences.
## Installation and Use
* Copy the proxy script to a directory in your path.
* Optionally edit the script to set the proxy_interface and proxy_host variables - by default, it configures a proxy of localhost:3128, on the Ethernet network interface.
* Before using the localhost:3128 proxy, start your SOCKS5 proxy. Using SSH, you can do this with:
ssh -D localhost:3128 -f -N remote_host_name
* Run the proxy script with no arguments, to get usage information.

