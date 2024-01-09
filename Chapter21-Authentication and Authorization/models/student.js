const mongoose = require("mongoose");
const { Schema } = mongoose; //從mongoose解構

const studentSchema = new Schema({
  username: {
    type: String,
    minlength: [6, "太短了"],
  },
  password: {
    type: String,
    minlength: [6, "太短了"],
  },
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
