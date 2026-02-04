import mongoose from "mongoose";
const logSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["Frontend", "Backend", "DSA", "Learning"],
      default: "Frontend",
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Log", logSchema);
