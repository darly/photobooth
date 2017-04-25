# Photobooth

## TL;TR (Too long; to read)

This section is for everyone that feels that the readme is too long (I personally hate long readme but it’s a necessary evil):
1. To run the project ensure that the machine has a webcam
2. Install nodejs from https://nodejs.org
3. Run the following two commands inside of the folder you put these files in. These commands will install the app and then run it
     
     `npm install`
     
     `npm start`
4. Its suggested to run the application inside of the latest version of chrome.

## Available commands 

Before running these commands make sure that nodejs and npm (npm is bundled with your nodejs installation) are installed in your system. Run these commands inside the folder you downloaded the projected too.

### Installation:

     npm install

Installs all the dependencies

### Starting/Developing:

     npm start

This command brings up a node server, and also watches your code for any changes. If a change is made then it re-compiles the code and serves it by refreshing your web browser.

### Making a build:

     npm build

The above commands creates a build and puts it in the dist/prob folder. This is a minified and compiled version of the app that is easily transferable to other devices. The only caveat is that in order to run this build you must do one of the following:
 - Run this on a localhost (I used http-server to create my own node server to run this on a raspberry pi)(https://github.com/indexzero/http-server). I have included a modified version of this inside “webserver” folder.
 - Put this in a server/webhost that supports https and serve it from that website.

You might be asking yourself why do you need to do this? Can you not just run the index.html in chrome and it should just work? Well that’s what I thought too, but in order for the browser to access your webcam it needs to be behind a secure connection for the user privacy read more about this here: https://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features

## Overview

This photobooth was created for my wedding to provide entertainment for my guest during the reception and cocktail hour. This application was created using angular2 and it uses a publisher/subcriber architucture (if you are unfamiliar with this pattern read more about the concept here https://msdn.microsoft.com/en-us/magazine/hh201955.aspx) and is written in typescript (typescript is a superset of javascript).The main purpose of the pub/sub pattern is to change the view when a person is in a particular screen (most screens have several views). 
The photobooth is build on top of angular-starter which provided the build process (https://github.com/mgechev/angular-seed/). The bulk of the code for the photobooth is located in  src\client\app

## Hardware setup:

This application was intended to run inside of chrome with a touch screen and a webcam. If you just want to develop or try it out, all you need is a laptop/pc with a webcam and a printer. 
While developing I have this running on my laptop that already has a webcam. For my wedding I had this running on a raspberry pi 3 connected to webcam and a touch screen and a printer. Below are links to the part I use(I am not promoting any of these items I just want to show a sample build)

1. https://www.amazon.com/Raspberry-Pi-RASPBERRYPI3-MODB-1GB-Model-Motherboard/dp/B01CD5VC92
2. https://www.amazon.com/Raspberry-Pi-7-Touchscreen-Display/dp/B0153R2A9I
3. https://www.amazon.com/Logitech-Widescreen-Calling-Recording-Desktop/dp/B006JH8T3S
4. https://www.amazon.com/HP-OfficeJet-Wireless-Printing-F1J03A/dp/B013SKI4X8 
For best results use a printer that supports 4x6 photo printing.

## Explanation as to what each screen and view does:

The app is divided into several screens and each screen has its own purpose. 
Each screen can also have several different views.
Screen and views:

* Screen: Configuration welcome screen - Allows you to either use the current configuration or create a new configuration. Creating a new configuration is still in development. 
* Screen: Configuration screen  - Still in development this is a new feature. This will allow the user to have granular control on how the application behaves instead of having to make code changes every time you want to change something.
* Screen: Splash screen - Allows you to choose the language of the photobooth. Through the configuration (still in development) you will be able to select the image to use for this screen, the language, and the text to show.
* Screen: Preview screen - Allows you to select a previously taken photo to edit it. Allows the user to get ready for their next shot while showing them a preview. Does a 3 second countdown after the user hits the button to take the picture. When all 3 pictures are taken the app will allow them to print the image.
    * View: Preview view - Allows user to prepare to take the next picture while showing them a preview, if all 3 images are taken then we show the print button.
    * View: Shot countdown view - Does a 3 second count and then takes a picture, while the countdown is happening we still show the user a preview.
* Screen: Edit screen - This screen gives the user 3 options, keep the picture taken (this saves the images, adds it to the photo-strip component and takes them back to the preview screen), add a filter to the image (we take them to the filter view inside the edit screen), and retake the picture (takes you back to the countdown in the preview screen). With the configuration you will be able to change the two side images in this screen and set what filters are available.
    * View: Edit view - Shows the user the picture taken and gives them 3 option, accept the picture, apply a filter to the image, retake the image.
    * View: Filter view - Applies some preset filter to the photo.

## To do:

1. Finish configuration screen and allow users to create configurations so that code changes don’t have to be done in order to set up for an event.
2. Change the webcam plugin we are using (we are using WebcamJS (https://github.com/jhuckaby/webcamjs)) because it’s gone into maintenance mode and no longer is being developed. Here are some potential solutions:
    1. We can just just have our own implementation of this, instead of using a plugin (seems pretty straight to build this functionality).
    2. Consider using https://github.com/amw/jpeg_camera
3. Add unit testing and end to end testing after the configuration screen is done. Better yet do the unit testing while building the configuration screen.
4. When making a build we should also provide necessary files to create a node server.
5. Add sample stock photos and remove the ones ones from me and my wife
6. Add a print settings because just because it prints fine in your printer doesn’t mean it will look nice or fit on others. This will also allow users to use other photo papers other than 4x6
