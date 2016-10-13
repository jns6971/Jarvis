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
- ```ssh pi@10.0.0.15``` for raspbery pi (static ip address)
- Lock in with Jordan's Raspberry Pi password
- ```cd /var/www/jarvis/``` then ```git pull```
- if raspberry pi npm or bower needs to be updated:
- ```sudo npm install```
- ```sudo bower install --allow-root```

## Build
- Gulp
