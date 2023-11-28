const cookieParser = require("cookie-parser");
const express = require("express");
const errorMiddleware = require("./middleware/error");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require('cors');

require("dotenv").config();

// Load environment variables
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: ".env" });
}

const app = express();
app.use(cors());



app.use(express.json());
app.use(cookieParser());
app.use('/Images', express.static(path.join(__dirname, 'Images')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Import routes
const url = require("./routes/linkRoute");
const user = require("./routes/userRoute");
const title = require('./routes/titleRoute');
const avatar = require('./routes/logoRoute');
const followUpTitle = require('./routes/followUpRoute')

// Use routes
app.use("/api/v1", url);
app.use("/api/v1", user);
app.use("/api/v1", title);
app.use("/api/v1", avatar);
app.use("/api/v1", followUpTitle)

app.use(errorMiddleware);

module.exports = app;
