# CLI vs GUI

CLI(command-line Interface) and GUI (Graphical User Interface) are two different ways of intrecting with a Computer or Software.

<h3>What is CLI</h3>

* Definations :- A text-based interface where users type commands to Perform Tasks.
* How it Works :- You interact with the system by typing specific commands into a terminal or console.

* Example:- Command Prompt in windows, Terminal in MacOS , Linux or YT-dlp

<h3>What is GUI</h3>

* Definations :- A Virtual Interface where users interact with the system through Graphical elements like windows , icons, buttons and menus.

* How it Works :- Users perform tasks by clicking , dragging and dropping using a mouse or touchpad

* Example :- Window OS , MacOS, Ubantu Desktop

# What is Node.js ?

Node.js is a C++ application(CLI) which can understand and run javascript code outside of the Browser.It provides a runtime environment build on Chrome's V8 JavaScript Engine , enabling developers to execute javascript on the server side.

<h3>What is Node.js used for?</h3>

<ul>
    <li>Web Servers and APIs</li>
    <li>Command-Line tools for example(npm,typeScript,Webpack,ESLint , Yarn,Create React App.Vue CLI , Angular CLI , Perttier, and more. )</li>
    <li>Internet of Things(IoT)</li>
</ul>

* In windows fine representation is //  - 'C:\\Users\\Mr Singh\\Desktop\\ProCodrr Node JS'
* GlobalThis in Node.js or JavaScript

# Why do we need Node.js & How is it Different form js in Browser ?

Node.js is extends the capabilities of javascript beyound what is possible when running javascript solely in a browser environment . Here's what node.js can do the normal javascript cannot, which makes it sutiable for building Backends.

<h3>Access to File System</h3>

<ul>
    <li>Node.js : Provides APIs to interact with the file system,allowing you to read,write,delete and manupulate files and directories on the server.</li>
    <li>Normal JavaScript : In a Browser , javascript is sandboxed for security reasons, meaning it cannot directly access the file system of the client device. </li>
</ul>

<h3>Networking Capabilities</h3>

<ul>
    <li>Node.js : enables the creation of web servers , handles network requests, and supports low-laevel newtworking features line creatiing TCP/UDP servers , Handdling sockets, etc</li>
    <li>Normal JavaScript : In a Browser , javascript can make HTTP requests (via fetch or XMLHttpRequest),but it connot create servers or handle low-level networking tasks. </li>
</ul>

<h3>Process Management</h3>

<ul>
    <li>Node.js : Can spawn child processes , manage multiple threads,and handle system-level tasks like interacting with operating system processes</li>
    <li>Normal JavaScript : In a Browser , javascript is limited to running a single thread and cannot spawn processesor directly interact with othe operating system. </li>
</ul>

<h3>Interacting with Operating System</h3>

<ul>
    <li>Node.js : Can interact with the operating system to perform tasks like reading environment variables, interacting with system processes , scheduling tasks,etc</li>
    <li>Normal JavaScript : In a Browser , javascript is sandboxed and connot interact with the operating system directly , limiting its capabilities to brower related tasks. </li>
</ul>

# Terminal

always use Bash Terminal , In windows install bash 
<ol>
    <li>Install Download Git </li>
    <li>Then go to visual studio get Default Terminal to Bash.</li>
</lo> 

* Echo Command - .sh is the bash file (This command name is echo this is use for Display text , create a files , bebug and test etc)

* pwd - Show Curent Directory

* whoami - Current user name

* cd - Change directory

* ls - List Directory - view all hidden file  - ls -a or ls -la

# Create Delete Rename Directory

* mkdir - create folder - Example: mkdir sec

* touch - Create a file - Example: touch index.html

* cp - Copy file  - Example: cp index.htmt Folder name

* mv - Move file - Example: mv index.html Folder name

* mv - Rename file - Example: mv app.js server.js

* rm - Remove file - Example: rm app.js

* rmdir - Remove Empty directory  - Example: rm src

* rm -r - Remove folder with file contain - Example: rm -r src

# View and Edit File System

* cat - Read and View File  - Example: cat index.html

* nano - nano is a default editor - Example: nano scipt.js

* vim - vim is also a default editor this is very powerful - Example: vim scipt.js 
<br>
<ol>
    <li>Code written is Complete and save and exit we have a step</li>
    <li>Press i to written any things</li>
    <li>First Click ESC key</li>
    <li>then first to save - Press (Shift + :)</li>
    <li>Written :w  then press Enter</li>
    <li>the Press (Shift + :)</li>
    <li>Written :q  then press Enter to exit the vim</li>
    <li>Without save exit type :q!</li>
    <li>save exit type :wq</li>
</ol>

# Prompt in Terminal

Prompt variables
* PS1: The primary command prompt displayed when the shell is waiting for input.
* PS2: The secondary prompt displayed when more input is needed (e.g., multi-line commands).
* PS3: The prompt used by the select command in shell scripts.
* PS4: The prompt used in debugging mode (when set -x is enabled).

Note - In open file explorer in command line  use explorer .

# Terminal Using .bashrc File
* create a file in Home directory go to home directory will this command cd ~/
* create a file named .bashrc and .bash_profile
* If any thing you can write in .bashrc file you will start the command the auto run this file
* Type the echo $PS1 then show PS1 file go to chatgpt how can change the Name and past the command in .bashrc file
*  Aliases to short the command code source ~/.bashrc to written aliase src="source ~/.bashrc" then you can type ony src command to run this command

# What is OS ?

OS is a software,He manage Hardware Resources, and many other things.

* What is Karnal - He Manage spaclized for Hardware Resources

# What is Process ?
Process is a Unit of Exuction 

Type of States

1- Ready State
2- Wating State
3- Running State
4- Sleep State
5- Terminating State

* Process ID  - 
* Context Switching - 

* Download this tool  - https://systeminformer.sourceforge.io/downloads.php

# Learn About Threads , Concurrency and Parallelism ?

* Threads - Worker of Process (More learn to ChatGPT)
* Spawning Thread - 