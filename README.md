# Jarvis
Home-Automation Web Application

## Setup
- ```cd``` to new project directory
- ```npm install```
- ```bower install```
- run ```gulp```

## Update Raspberry Pi
- Make sure the device is powered on.
- SSH using Mac 
- ```ssh pi@10.0.0.8``` for raspbery pi on ethernet
- ```ssh pi@10.0.0.13``` for raspbery pi on wifi
- Lock in with Jordan's Raspberry Pi password
- ```cd /var/www/jarvis/```
- ```git pull```
- if raspberry pi npm or bower needs to be updated:
- ```sudo npm install```
- ```sudo bower install --allow-root```

## Contents
- Gulp (sass, browserify & watch)
- Inuint Framework
