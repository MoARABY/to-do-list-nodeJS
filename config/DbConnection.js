const mongoose = require("mongoose");

const DB_CONNECTION = async () => {
  try {
    const Db_connect_func = await mongoose
      .connect(process.env.DB_CONNECT)
      .then(console.log("connect successfuly to Database"));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = DB_CONNECTION;
