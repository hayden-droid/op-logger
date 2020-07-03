const mongoose = require("mongoose");

const iplogSchema = new mongoose.Schema({
  ip: {
    type: String,
    required: false,
  },
  useragent_details: {
    type: JSON,
    required: false,
  },
  usertime: {
    type: Date,
    required: false,
    // will need to be passed by the shorturl it came from
    // not sure how i will do that
  },
  victimtime: {
    type: Date,
    required: false,
  },
  iprate: {
    type: Number,
    required: false,
    // This one will probably be in browser javascript due to rate limiting
  },
  location: {
    type: JSON,
    required: false,
  },
  language: {
    type: Object,
    required: false,
  },
  hostname: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("iplog", iplogSchema);
