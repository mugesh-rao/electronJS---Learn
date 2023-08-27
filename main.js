const { app, BrowserWindow } = require('electron');

function createWindow() {
  // Create a new browser window
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true // Enable Node.js integration in the renderer process
    }
  });

  // Load the HTML file into the window
  win.loadFile('index.html');
}

// Event: App is ready
app.whenReady().then(createWindow);

// Event: All windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Event: App is activated (macOS)
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
