const mongoose = require("mongoose");

const MONGO_URL = "mongodb+srv://rahul630738:bbPKyiYdTyTpKRJ7@cluster0.tf8nzs9.mongodb.net/BMI_Calculator?retryWrites=true&w=majority"

mongoose.connect(MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on("connected", () => {
    console.log("Server is Successfully Connected to MONGO DB Database");
})

db.on("error", (err) => {
    console.log("Error: " + err);
})

module.exports = mongoose;


// mongodb+srv://rahul630738:bbPKyiYdTyTpKRJ7@cluster0.tf8nzs9.mongodb.net/BMI_Calculator?retryWrites=true&w=majority 