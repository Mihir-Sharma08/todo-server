const mongoose = require("mongoose");

const createDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/todo");
    console.log("💻 Mondodb Connected");
  } catch (error) {
    console.error(error);
  }
};

module.exports = createDb;
