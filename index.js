const electron = require("electron");

const TimerTray = require("./app/timerTray");
const MainWindow = require("./app/mainWindow");

const { app, ipcMain } = electron;

let mainWindow;
let tray;

app.on("ready", async () => {
  app.dock.hide();
  mainWindow = new MainWindow();
  await mainWindow.loadFile(`./src/index.html`);
  /* Create tray */
  tray = new TimerTray(mainWindow);
});

ipcMain.on("update:timer", (event, timeLeft) => {
  console.log(timeLeft);
  tray.setTitle(timeLeft);
});
