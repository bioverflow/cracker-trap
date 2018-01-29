# WebCrackerTrap
Detect if web developer tools is opened and change natural flow of webapps, you can override to redirect to another web page, show an alert or limit your own code.

## Demo
* Basic: [https://bioverflow.github.io/tools/cracker-trap/basic/](https://bioverflow.github.io/tools/cracker-trap/basic/)
* Message: [https://bioverflow.github.io/tools/cracker-trap/alert/](https://bioverflow.github.io/tools/cracker-trap/alert/)
* Redirect: [https://bioverflow.github.io/tools/cracker-trap/redirect/](https://bioverflow.github.io/tools/cracker-trap/redirect/)

## Install

```
$ npm install --save devtools-detect
```

## Usage

```html
<!-- 1) Insert on your own declarations-->
<script src="node_modules/crackertrap/index.js"></script>
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
- Safari DevTools
- Firefox DevTools
- Opera DevTools
- Firebug
- Firebug Lite
- Internet Explorer

## License

GPL-3.0 © [Reverse Bytes](https://reversebytes.wordpress.com)
