import mongoose from "mongoose";

const deviceSchema = new mongoose.Schema(
  {
    deviceID: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: String,
      enum: ["online", "offline"],
      default: "offline",
    },
    currentSocketID: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

export const Device = mongoose.model("Device", deviceSchema);
