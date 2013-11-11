# Proxy-SSH - Run SSH and SCP Through a SOCKS5 Proxy
## Purpose
If you want to SSH or SCP from home to multiple servers at work, but you are only able to reach a single server by SSH, you can use pssh to help you proxy SSH connections through the proxy host. Use the pssh and pscp commands to pseudo-directly ssh or scp to hosts behind the proxy host.

## How It Works
* When you want to connect through the proxy, you use pssh in place of the ssh command, or pscp in place of the scp command.
* If there is not already one detected, a proxy SSH connection is run in the background, defining a SOCKS5 proxy on localhost:1080.
* The original ssh or scp command which the pssh and pscp scripts are wrapping, is run - including an additional option to proxy through a netcat command which connects to localhost port 1080.
* You access the intented system, coming from the proxy host.
## Installation and Use
* Copy proxy-ssh to a directory in your path.
* Create symlinks to the proxy-ssh script, named pssh and pscp - these are the commands you will use in place of the ssh and scp commands, when you want to be proxied:
ln -s proxy-ssh pssh
ln -s proxy-ssh pscp
* Edit the proxy-ssh script, and set the proxy_host variable to the IP or DNS name of your proxy host.
* Now use pssh orp scp when you want ot proxy ssh or scp. E.G.
pssh userName@SomeInternalHost
pscp file.txt SomeINternalHost:/some/other/path/
* When you are done proxying for now, kill the background proxy ssh connection by passing -killproxy as the first parameter to pssh, pscp, or proxy-ssh. E.G.
pssh -killproxy

