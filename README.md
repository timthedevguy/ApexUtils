## Welcome to ApexUtils
### What is ApexUtils
PrUnTools started as a private set of tools that I wrote with another member of the community. I then noticed that I could seperate the Apex code in to it's own reusable library which resulted in ApexUtils. This would allow me to keep my tools and provide a framework for others to use to create their own.

ApexUtils is a set of utility functions designed to be used by TamperMonkey scripts (or similar products) to interact with the APEX interface in a safe way. The utility also loads CSS that mimics the style of APEX but with class names you can use in your own HTML.

### What ApexUtils is NOT
ApexUtils is NOT a framework for creating Bots. It performs only one automatic click to create a new buffer window. I have personally showed this feature to the Devs and they are ok with it. **You** are responsible for what you create with the tool.

### Is this against ToS
No. ApexUtils itself only reads and adds content to the Client. It does not send data to the server or automate client tasks. ApexUtils interfaces with the DOM elements of the page and does not attempt to interact with the Javascript in the page, all modifications are done using it's own Javascript utilizing jQuery.

### How do I use ApexUtils
ApexUtils is just a helper script.  It's meant to be used with some 
type of script injection system like [TamperMonkey](https://www.tampermonkey.net/).
TamperMonkey is a Chrome/Edge/Safari/Firefox browser plugin that will
sideload Javascripts in to pages of your choosing.

Sideloading Javascript allows your scripts to interact with the elements
on the page you are reading.  You can read data off the page, add data 
to the page, add button, boxes, etc to the page.

This is where ApexUtil comes in, I've determined what I think is a good
and safe way to interact with Apex is and then put that code in to a
library for you to use.

### What can ApexUtils do?
Currently ApexUtils has the ability to
* Create a menu block in left menu and populate it with menu items 
you create
* Create new Buffer windows and replace the default content with 
content you provide
* Create alert Buffer windows to display success/error/warning messages
* Monitors the 'SCRN:' to detect when you change screens so you can 
perform actions when screen changes

This may not seem like much, but this is just a framework to make it
easy for you to get your content in to the APEX interface.  Once your
content is in you could have an entire Javascript mini-application 
with the main APEX interface.