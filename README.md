# Only Front Platform

## Install

### Required on your device
 
 - git (https://git-scm.com/)
 - node js server with npm (http://nodejs.org/)
 - bower (http://bower.io/)    `$ npm i -g bower`
 - grunt (http://gruntjs.com/) `$ npm i -g grunt` and `$ npm i -g grunt-cli` 
 
### Install command in terminal
 
 ```
 $ cd <root_dir>
 $ npm install
 $ bower install
 $ grunt deploy:<project_name>
 ```
 
## Folder structure

 ```
 ├── package.json       // npm config
 ├── bower.json         // bower config
 ├── Gruntfile.js       // grunt config
 ├── bower_components   // generated on install time - bower install
 ├── node_modules       // generated on install time - npm install
 ├── js                 // generated on build time   - grunt deploy:<project_name>
 │   ├── app.js
 │   └── app.min.js
 ├── ng
 │   ├── app.js
 │   ├── controllers
 │   ├── directives
 │   ├── factory
 │   ├── services
 │   └── templates
 ├── projects
 │   └── demo
 │       ├── route.js
 │       ├── controllers
 │       ├── services
 │       ├── directives
 │       └── templates
 ├── index.html
 └── templates          // generated on build time   - grunt deploy:<project_name>
 ```