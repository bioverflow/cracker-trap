/* global CustomEvent */
/*
 * cracker-trap based on devtools-detect
 * Detect if web developer tools is open to hardening apps
 * https://github.com/bioverflow/cracker-trap
 * by Reverse Bytes
 * GPL 3.0
*/
((function () {
  var devtools = {
    open: false,
    orientation: null,
    undocked: null
  }
  var threshold = 160

  // Emit an event when devtools status is changed
  var emitEvent = function emitEvent (state, orientation, undocked) {
    try {
      window.dispatchEvent(new CustomEvent('onDevToolsChange', {
        detail: {
          open: state,
          orientation: orientation,
          undocked: undocked
        }
      }))
    } catch (e) {
      var event = document.createEvent('CustomEvent')
      var data = {
        'open': state,
        'orientation': orientation,
        'undocked': undocked
      }
      event.initCustomEvent('onDevToolsChange', true, false, data)
      document.documentElement.dispatchEvent(event)
    }
  }

  function timeValidation () {
    var startTime = new Date()
    debugger // eslint-disable-line 
    var endTime = new Date()

    return endTime - startTime > 100
  }

  // Every half second check if developer tools is opened or not
  setInterval(function () {
    // Check between browser width/height and visible width/height and compare
    // with max threshold.
    var widthThreshold = window.outerWidth - window.innerWidth > threshold
    var heightThreshold = window.outerHeight - window.innerHeight > threshold
    var orientation = widthThreshold ? 'vertical' : 'horizontal'

    if (heightThreshold === true || widthThreshold === true) {
      if (devtools.open === true || devtools.orientation !== orientation) {
        emitEvent(true, orientation, null)
      }

      devtools.open = true
      devtools.orientation = orientation
      devtools.undocked = false
    } else if (timeValidation() === true) {
      emitEvent(true, null, true)
      devtools.undocked = true
    } else {
      if (devtools.open) {
        emitEvent(false, null, null)
      }

      devtools.open = false
      devtools.orientation = null
      devtools.undocked = null
    }
  }, 500)

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = devtools
  } else {
    window.devtools = devtools
  }
})())
