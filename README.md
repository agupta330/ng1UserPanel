ng1UserPanel - HTML5 (Non-Flash) Based Copy to clipboard using AngularJS
=======

A simple AngularJS directive that shows User Panel.


## How to get it ? 

#### Bower 
```
bower install ng1UserPanel
```
<!--
#### Npm
```
npm install ng1UserPanel
```
-->

## Usage

1. Add ng1UserPanel.js to your main file (index.html)
  ```html
  <script type="text/javascript" src="bower_components/ng1UserPanel/dist/ng1UserPanel.js"></script>
  ```

2. Add userpicker.css to your main file (index.html)
 ```css
  <link rel="stylesheet" type="text/css" href="bower_components/ng1UserPanel/src/css/userpicker.css">
  ```
3. This directive depends on other dependencies like angular,bootstrap to run it
 ```<script src = "bower_components/angular/angular.min.js"></script>
    <script src = "bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
	<link rel="stylesheet" type="text/css" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
 ```

4. Set `ng1UserPanel` as a dependency in your module
  ```javascript
  var myapp = angular.module('myapp', ['ng1UserPanel'])
  ```

5. Add copy-text directive to the wanted element, example:
  ```html
  <span copy-text>Text To Copy</span>
  ```
