import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
    required: true,
  },
  activities: [
    {
      application: {
        type: String,
        required: true,
      },
      heading: {
        type: String,
        required: true,
      },
      activeTime: {
        type: Number,
        required: true,
      },
      fullPath: {
        type: String,
        required: true,
      },
    },
  ],
});

const Activity = mongoose.model("Activity", activitySchema);

export default Activity;
