const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");
const activeWin = require("active-win");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 450,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL("http://localhost:3000");

  setInterval(() => {
    activeWin().then((result) => {
      console.log("Active Window:", result.title);
      mainWindow.webContents.send("activeApp", result.title);
    });
  }, 1000); // Update every second
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
