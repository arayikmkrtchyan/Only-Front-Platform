# Only Front Platform

## Install

### Required on your device
 
 - git (https://git-scm.com/)
 - node js server with npm (http://nodejs.org/)
 - bower (http://bower.io/)    `$ npm i -g bower`
 - grunt (http://gruntjs.com/) `$ npm i -g grunt` and `$ npm i -g grunt-cli` 
 
### Install command in terminal
 
 ```
 $ cd <project_root_dir>
 $ npm install
 $ bower install
 $ grunt
 ```
 
## Folder structure

 ```
 ├── node_modules     // this folder generated on install time - npm install
 ├── bower_components // this folder generated on install time - bower install
 ├── js               // this folder generated on build time   - grunt
 ├── ng
 |   ├── factory
 |   └── directives
 ├── .gitignore
 ├── bower.json
 ├── package.json
 ├── Gruntfile.js
 └── README.md
 ```