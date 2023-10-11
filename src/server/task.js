import activeWin from "active-win";

const MAX_SIZE = 10;

var activeWindowStats = {};
var count = 0;

function incrementWindowStats(activeWindow) {
  count += 1;

  if (activeWindowStats.hasOwnProperty(activeWindow.title)) {
    activeWindowStats[activeWindow.title] += 1;
  } else {
    activeWindowStats[activeWindow.title] = 1;
  }
}

function resetWindowStats() {
  count = 0;
  activeWindowStats = {};
}

async function logActiveWindow() {
  try {
    const activeWindow = await activeWin();

    incrementWindowStats(activeWindow);

    if (count == MAX_SIZE) {
      // log aggregate stats
      for (const k in activeWindowStats) {
        const v = activeWindowStats[k];
        console.log(`Key: ${k}, Value: ${v}`);
      }

      resetWindowStats();
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

export default logActiveWindow;
