'use strickt'

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var mainWindow = null;


function windowObj(width, height){
	return new BrowserWindow({width: width, height: height});
}

app.on('window-all-closed', function() {
	if (process.platform != 'darwin') {
		app.quit();
	}
});

app.on('ready', function() {
	mainWindow = windowObj(300, 300);
	mainWindow.loadURL(`file://${__dirname}/index.html`);
	//mainWindow.webContents.openDevTools();
	mainWindow.on('closed', function () {
		mainWindow = null;
	})
});
