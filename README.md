# How to install the Azure CLI
The CLI is a tool designed to get you working quickly and efficiently with Azure services.

## Install Azure CLI on Windows
For Windows the Azure CLI is installed via an MSI, which gives you access to the CLI through the Windows Command Prompt (CMD) or PowerShell.

### Install or update
The MSI distributable is used for installing or updating the Azure CLI on Windows.
[Download the MSI installer](https://aka.ms/installazurecliwindows)

#### Sign in
You can now run the Azure CLI with the az command from either Windows Command Prompt or PowerShell.
1. Run the login command
~~~~ 
az login
~~~~ 
2. Sign in with your account credentials in the browser.

## Install Azure CLI on macOS
For the macOS platform, you can install the Azure CLI with homebrew package manager. 

### Install 
Homebrew is the easiest way to manage your CLI install. It provides convenient ways to install, update, and uninstall. If you don't have homebrew available on your system, install homebrew before continuing.
#### How to Install Homebrew on Mac OS
1. Open the “Terminal” application, found in /Applications/Utilities/
2. Enter the following command into a single line of the terminal:
~~~~
/usr/bin/ruby -e 
"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
~~~~
3.Enter the administrator password (required by sudo execution) to begin installation

#### How to Install Azure CLI
You can install the CLI by updating your brew repository information, and then running the install command
~~~~ 
brew update && brew install azure-cli
~~~~ 

#### Sign in
You can now run the Azure CLI with the az command from either Windows Command Prompt or PowerShell.
1. Run the login command
~~~~ 
az login
~~~~ 
2. Sign in with your account credentials in the browser.

## Install on Linux or Windows Subsystem for Linux (WSL)

### Install with apt on Debian or Ubuntu
> **WARNING**: This script is only verified for Ubuntu 16.04+ and Debian 8+ !
~~~~ 
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
~~~~ 
### Install with yum on RHEL, Fedora, or CentOS
> **WARNING**: The RPM package of the Azure CLI depends on the python package. On your system, this may be a Python version which predates the requirement of Python 2.7.x !

1. Import the Microsoft repository key.
~~~~
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
~~~~

2. Create local azure-cli repository information.
~~~~
sudo sh -c 'echo -e "[azure-cli]\nname=Azure CLI\nbaseurl=https://packages.microsoft.com/yumrepos/azure-cli\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/azure-cli.repo'
~~~~

3. Install with the yum install command.
~~~~
sudo yum install azure-cli
~~~~

## Run Azure CLI in a Docker container
You can use Docker to run a standalone Linux container with the Azure CLI pre-installed. Docker gets you started quickly with an isolated environment to run the CLI in.

Install the CLI using docker run.
~~~~
docker run -it mcr.microsoft.com/azure-cli
~~~~

