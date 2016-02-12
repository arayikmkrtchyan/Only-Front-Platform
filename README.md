# Only Front Platform

## Install

### Required on your device
 
 - git (https://git-scm.com/)
 - node js server with npm (http://nodejs.org/)
 - bower (http://bower.io/)    `$ npm i -g bower`
 - gulp (http://gulpjs.com/) `$ npm i -g gulp`

### Change config for your project

 Go to `<root_dir>/gulp/` and edit `config.js` this is a node module
 Change projectName variable and set your project directory name
 ex: `var projectName = 'demo';`

### Install command in terminal
 
 ```
 $ cd <root_dir>
 $ npm install
 $ bower install
 $ gulp build
 ```
 
## Folder structure

 ```
 .
 ├── bower_components
 │   ├── angular
 │   ├── angular-route
 │   ├── ...
 │   └── jquery
 ├── bower.json
 ├── gulp
 │   └── config.js
 ├── gulpfile.js
 ├── node_modules
 ├── package.json
 ├── projects
 │   └── [ProjectName]
 │       ├── css
 │       ├── html
 │       ├── images
 │       ├── js
 │       │   ├── route.js
 │       │   ├── interceptors
 │       │   ├── directives
 │       │   ├── services
 │       │   └── controllers
 │       ├── rest
 │       └── index.html
 ├── public
 │   ├── html
 │   ├── images
 │   ├── js
 │   ├── rest
 │   └── index.html
 ├── README.md
 └── src
     ├── css
     ├── html
     ├── images
     ├── js
     │   ├── app.js
     │   ├── route.js
     │   ├── interceptors
     │   ├── factory
     │   ├── directives
     │   ├── services
     │   └── controllers
     ├── rest
     └── index.html

 ```