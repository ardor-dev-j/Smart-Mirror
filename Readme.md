# Smart Mirror Jonas Schmidt

## Description
   This Readme describes the dependencies and steps taken to create a portable, mulicross-plattform desktop application called *Smart Mirror*. It explaines which technology will be used and how to implement it, in a brief descriptional way.

   The App gets deployed on a Raspberry Pi 3 and the Mirror will be displayed on a 32' 720p HDMI TV monitor in landscape display format. So the maximal possible resolution can be set to 2560x1600 px.

   The app shall be deoployed as a **Docker** Container for prtability sake. Furthermore Electron will be used


## Content
 1. Prerequisites
 2. Smart Mirror's desired components
 3. Draft

### 1. Prerequisites
   + **DOM (Document Object Model)**
       + object oriented structure of th elements of a web document
       +  different DOM standards exists for the web
       +  example: every <'p'> element is an object of the class pragraph
       +  DOM is needed for maipulating the HTML elements via  JS
       +  also usable in other programming languages like Python