import activeWin from "active-win";
import ActivityModel from "./db/models/Activity.js";

// Every minute
const MAX_SIZE = 10;

// TODO: mutable
let currentSize = 0;

function incrementActivityData(activeWindow, activityData) {
  const updatedActivityData = { ...activityData };

  if (updatedActivityData.hasOwnProperty(activeWindow.title)) {
    updatedActivityData[activeWindow.title] += 1;
  } else {
    updatedActivityData[activeWindow.title] = 1;
  }

  return updatedActivityData;
}

function isActivityDataFull(currSize) {
  return currSize >= MAX_SIZE;
}

function createActivity(activityData) {
  const activities = [];

  // log aggregate stats
  for (const k in activityData) {
    const v = activityData[k];
    console.log(`Key: ${k}, Value: ${v}`);

    const lastIndex = k.lastIndexOf("-");

    let heading;
    let application;

    if (lastIndex !== -1) {
      heading = k.substring(0, lastIndex).trim();
      application = k.substring(lastIndex + 1).trim();
    } else {
      heading = k.trim();
      application = k.trim();
    }

    activities.push({
      application: application,
      heading: heading,
      fullPath: k,
      activeTime: v,
    });
  }

  // TODO - Fix
  const activity = new ActivityModel({
    userId: "John Doe",
    timestamp: Date.now(),
    activities: activities,
  });

  return activity;
}

function saveActivity(activity) {
  activity
    .save()
    .then((savedActivity) => {
      console.log("Activity saved: ", savedActivity);
    })
    .catch((err) => {
      console.error("Error:", err);
    });
}

async function logActiveWindow(activityData) {
  try {
    const activeWindow = await activeWin();

    activityData = incrementActivityData(activeWindow, activityData);
    currentSize += 1;

    if (!isActivityDataFull(currentSize)) {
      return activityData;
    }

    const activity = createActivity(activityData);
    saveActivity(activity);

    currentSize = 0;
    return {};
  } catch (error) {
    console.error("Error:", error);
  }
}

export default logActiveWindow;
