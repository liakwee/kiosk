'use strict';
const app = require('app');
const BrowserWindow = require('browser-window');


// report crashes to the Electron project
require('crash-reporter').start();

// adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')();

function createMainWindow () {
	const win = new BrowserWindow({
		width: 600,
		height: 400,
		resizable: false
	});

	win.loadUrl('http://paulrhayes.com/experiments/cube-3d/touch.html');
	win.on('closed', onClosed);

	return win;
}

function onClosed() {
	// deref the window
	// for multiple windows store them in an array
	mainWindow = null;
}

// prevent window being GC'd
let mainWindow;

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit();
	}

});

app.on('activate-with-no-open-windows', function () {
	if (!mainWindow) {
		mainWindow = createMainWindow();
	}
});

app.on('ready', function () {

		var Screen = require('screen');

    var size = Screen.getPrimaryDisplay().size;

    var width = size.width;
    var height = size.height;

    // Create the browser window.
    mainWindow = new BrowserWindow({
      'width': width,
      'height': height,
      'max-width': width,
      'max-height': height,
      'fullscreen': true,
      'frame': false,
      'kiosk': true,
      'transparent': true,
      'show': true,
      'resizable': false
    });
    mainWindow.loadUrl('http://paulrhayes.com/experiments/cube-3d/touch.html');
		mainWindow.on('closed', onClosed);

    // mainWindow = createMainWindow();
});
