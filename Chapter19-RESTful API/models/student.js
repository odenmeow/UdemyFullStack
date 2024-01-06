const mongoose = require("mongoose");
const { Schema } = mongoose; //從mongoose解構

const studentSchema = new Schema({
  name: {
    type: String,
    required: true, // update 不會被管，save才會
    minlength: 2,
  },
  age: {
    type: Number,
    default: 18,
    max: [80, "有點太老了..."],
    min: [0, "太小了0已經夠扯了"],
  },
  major: String,
  scholarship: {
    merit: {
      type: Number,
      max: [5000, "學生應得獎學金給太多囉"],
      min: 0,
      default: 0,
    },
    other: {
      type: Number,
      min: 0,
      default: 0,
    },
  },
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
