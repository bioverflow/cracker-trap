/*
 * CrackerTrap based on devtools-detect
 * Detect if web developer tools is open to hardening apps
 * https://github.com/bioverflow/CrackerTrap
 * by Sindre Sorhus
 * MIT License
*/
((function () {
	const devtools = {
		open: false,
		orientation: null,
		undocked: null,
	};
	const threshold = 160;

	// Emit an event when devtools status is changed
	const emitEvent = function emitEvent(state, orientation, undocked) {
		window.dispatchEvent(new CustomEvent('onDevToolsChange', {
			detail: {
				open: state,
				orientation,
				undocked,
			},
		}));
	};

	function timeValidation() {
		const startTime = new Date();
		debugger;
		const endTime = new Date();

		return endTime - startTime > 100;
	}

	// Every half second check if developer tools is opened or not
	setInterval(() => {
		const widthThreshold = window.outerWidth - window.innerWidth > threshold;
		const heightThreshold = window.outerHeight - window.innerHeight > threshold;
		const orientation = widthThreshold ? 'vertical' : 'horizontal';

		if (heightThreshold === true || widthThreshold === true) {
			if (devtools.open === true || devtools.orientation !== orientation) {
				emitEvent(true, orientation, null);
			}

			devtools.open = true;
			devtools.orientation = orientation;
			devtools.undocked = false;
		} else if (timeValidation() === true) {
			emitEvent(true, null, true);
			devtools.undocked = true;
		} else {
			if (devtools.open) {
				emitEvent(false, null, null);
			}

			devtools.open = false;
			devtools.orientation = null;
			devtools.undocked = null;
		}
	}, 500);

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = devtools;
	} else {
		window.devtools = devtools;
	}
})());
