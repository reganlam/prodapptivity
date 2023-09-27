const activeWin = require("active-win");

function logActiveWindow() {
  activeWin().then((result) => {
    console.log("Active window:", result.title);
  });
}

module.exports = logActiveWindow;
