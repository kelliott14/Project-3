const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://adminuser:adminuser1@ds231749.mlab.com:31749/heroku_0hjrbm6t");

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
})