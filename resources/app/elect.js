const { app, BrowserWindow} = require('electron');

function createWindow () {
  let win = new BrowserWindow({
    width: 2560,
    height: 1600,
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.loadFile('./index.html');
 

}

app.whenReady().then(createWindow);
