ng1CopyText - HTML5 (Non-Flash) Based Copy to clipboard using AngularJS
=======

A simple AngularJS directive that uses document.exec('copy') and updates the user's clipboard.


## How to get it ? 

#### Manual Download
Download the from [here](https://github.com/agupta330/ng1CopyText/releases)

#### Bower 
```
bower install ng1CopyText
```
<!--
#### Npm
```
npm install ng1CopyText
```
-->

#### CDN
ng-clip is available at [cdnjs](http://www.cdnjs.com/libraries/ng1CopyText)


## Usage

1. Add ng1CopyText.js to your main file (index.html)
  ```html
  <script type="text/javascript" src="bower_components/ng1CopyText/dist/ng1CopyText.js"></script>
  ```

2. Set `ngCopyText` as a dependency in your module
  ```javascript
  var myapp = angular.module('myapp', ['ngCopyText'])
  ```

3. Add copy-text directive to the wanted element, example:
  ```html
  <span copy-text>Text To Copy</span>
  ```

4. In Unsupported Browsers, the text will be selected, allowing user's to [CMD+C] or [Ctrl+C] to copy


## Examples
You can check out this live example here: http://plnkr.co/XXXX 


## Credits
This project was initially forked from the application template seed here
[https://github.com/refactorthis/angular-component-seed.git](https://github.com/refactorthis/angular-component-seed.git)
"# ng1CopyText" 
"# ng1CopyText" 
"# ng1UserPanel" 
