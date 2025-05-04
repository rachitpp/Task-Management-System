import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
  recipient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  type: {
    type: String,
    enum: [
      "task-assigned",
      "task-updated",
      "task-completed",
      "task-deadline",
      "system",
    ],
    required: true,
  },
  title: { type: String, required: true },
});
