const electron = require("electron");
const { BrowserWindow } = electron;

class MainWindow extends BrowserWindow {
  constructor() {
    super({
      height: 500,
      width: 300,
      frame: false,
      resizable: false,
      show: false,
      webPreferences: {
        nodeIntegration: true,
        backgroundThrottling: false,
      },
    });

    this.on("blur", this.onBlur);
  }

  onBlur = () => {
    this.hide();
  };
}

module.exports = MainWindow;
