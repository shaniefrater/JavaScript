// Get requests are stored in the browser history / POST requests are not
// POST Requests cannot be cached

// History Object - Part of the DOM and gives us our history (window.history)

<h1 id="heading" onclick="goForward()" ></h1> 

function goForward() {
    window.history.forward()
}

function goBack() {
    window.history.back()
}

// Browser Storage:

// Local Storage: Persists even when the browser is closed/computer is shut down
// Session Storage: Removed when a tab is closed

// Cookies are limited to 4k
// windows.history.pushState() is limited to 640k

// cookies are small amounts of data stored in the browser - usually for analytics or remembering passwords etc

// Use Strict = Defines JS should be executed in STRICT MODE (cannot use undeclared variables i.e. let a instead of the undeclared a)

// <noscript> defines alternate content to show if JS is disabled in JS or if it is not compatible with device