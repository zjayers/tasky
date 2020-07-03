const electron = require("electron");
const path = require("path");
const { app, Tray, Menu } = electron;

class TimerTray extends Tray {
  constructor(mainWindow) {
    const iconName =
      process.platform === "win32" ? "windows-icon.png" : "iconTemplate.png";
    const iconPath = path.join(__dirname, `../src/assets/${iconName}`);

    super(iconPath);
    this.mainWindow = mainWindow;
    this.setToolTip("Timer App");
    this.on("click", this.onClick);
    this.on("right-click", this.onRightClick);
  }

  onClick = (event, bounds) => {
    // Click Event Bounds
    const { x, y } = bounds;
    const { width, height } = this.mainWindow.getBounds();

    if (this.mainWindow.isVisible()) {
      this.mainWindow.hide();
    } else {
      const yPosition = process.platform === "win32" ? y - height : y;
      this.mainWindow.setBounds({
        x: x - width / 2,
        y: yPosition,
        width,
        height,
      });

      this.mainWindow.show();
    }
  };

  onRightClick = () => {
    const menuConfig = Menu.buildFromTemplate([
      {
        label: "quit",
        click: () => {
          app.quit();
        },
      },
    ]);

    this.popUpContextMenu(menuConfig);
  };
}

module.exports = TimerTray;
