const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
  },
  start_time: {
    type: String,
    required: true,
  },
  end_time: {
    type: String,
  },
  recurrence: {
    type: String,
    enum: ["None", "Daily", "Weekly"],
    default: "None",
  },
});
eventSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Event", eventSchema);
