const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors({ origin: "https://www.pranavx10.live" }));
app.use(express.json());

app.use("/admin", adminRouter);
app.use("/user", userRouter);
const url =
  process.env.mongoose_url ||
  "mongodb+srv://pranav136:Pranavgarg136@cluster0.j2jt8ke.mongodb.net/";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "courses",
});

app.listen(3000, () => console.log("Server running on port 3000"));
