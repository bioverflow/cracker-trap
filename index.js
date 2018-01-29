/*!
	CrackerTrap based on devtools-detect
	Detect if web developer tools is open to hardening apps
	https://github.com/bioverflow/CrackerTrap
	by Sindre Sorhus
	MIT License
*/
(function () {
	'use strict';

	var devtools = {
		open: false,
		orientation: null
	};
	var threshold = 160;

	/// Event to catch when devtools is opened or closed
	var emitEvent = function (state, orientation) {
		window.dispatchEvent(new CustomEvent('onDevToolsChange', {
			detail: {
				open: state,
				orientation: orientation
			}
		}));
	};

	setInterval(function () {
		var widthThreshold = window.outerWidth - window.innerWidth > threshold;
		var heightThreshold = window.outerHeight - window.innerHeight > threshold;
		var orientation = widthThreshold ? 'vertical' : 'horizontal';

		if (heightThreshold === true || widthThreshold === true) {
			if (devtools.open === true || devtools.orientation !== orientation) {
				emitEvent(true, orientation);
			}

			devtools.open = true;
			devtools.orientation = orientation;
		} 
		else {
			if (devtools.open) {
				emitEvent(false, null);
			}

			devtools.open = false;
			devtools.orientation = null;
		}
	}, 500);

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = devtools;
	} else {
		window.devtools = devtools;
	}
})();
