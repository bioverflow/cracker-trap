# Cracker Trap
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Detect if web developer tools is opened and change natural flow of webapps, you can override to redirect to another web page, show an alert or limit your own code.

## Demo
* Basic: [https://bioverflow.github.io/tools/cracker-trap/basic/index.html](https://bioverflow.github.io/tools/cracker-trap/basic/index.html)
* Message: [https://bioverflow.github.io/tools/cracker-trap/alert/index.html](https://bioverflow.github.io/tools/cracker-trap/alert/index.html)
* Redirect: [https://bioverflow.github.io/tools/cracker-trap/redirect/index.html](https://bioverflow.github.io/tools/cracker-trap/redirect/index.html)

## Install

### NPM
```
$ npm install --save cracker-trap
```

## Usage

### NPM module
```html
<!-- 1) Insert on your own declarations-->
<script src="node_modules/cracker-trap/build/cracker-trap.min.js"></script>
<!-- 2) Use after declaration -->
<script>
	/// Single usage
	// checking if developer tools it's open
	console.log('is developer tools open?: ', window.devtools.open);
	// if DevTools is opened detect their orientation
	console.log('DevTools orientation?: ', window.devtools.orientation);
	// if DevTools is undocked from main page
	console.log('DevTools is undocked?: ', window.devtools.undocked);

	/// Listening event when state is change
	// Get state when itself is changed
	window.addEventListener('onDevToolsChange', function (e) {
		console.log('is DevTools open?', e.detail.open);
		console.log('DevTools orientation?', e.detail.orientation);
		console.log('DevTools is undocked?: ', e.details.undocked);
	});
</script>
```

## Support

- Chrome DevTools
- Edge DevTools
- Firefox DevTools
- Opera DevTools
- Firebug
- Internet Explorer 11 DevTools

## Standard

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## License

GPL-3.0 © [Reverse Bytes](https://reversebytes.wordpress.com)
