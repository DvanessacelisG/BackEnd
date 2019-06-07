# How to install the Azure CLI
The CLI is a tool designed to get you working quickly and efficiently with Azure services.

## Install Azure CLI on Windows
For Windows the Azure CLI is installed via an MSI, which gives you access to the CLI through the Windows Command Prompt (CMD) or PowerShell.

### Install or update
The MSI distributable is used for installing or updating the Azure CLI on Windows.
[Download the MSI installer] (https://aka.ms/installazurecliwindows)

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
[Install homebrew](https://docs.brew.sh/Installation.html)

ou can install the CLI by updating your brew repository information, and then running the install command
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
~~~~ 
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
~~~~ 
| WARNING: be careful to baz the quux before initializing the retro encabulator! |
| --- |
### Install with yum on RHEL, Fedora, or CentOS



