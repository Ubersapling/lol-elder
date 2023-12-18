const express = require("express");
const mongoose = require("mongoose")
const authRoutes = require("./routes/authRoutes");
const authMiddleware = require("./middleware/auth");
const app = express();

app.use(express.json());
app.use(authRoutes);

app.get("/login", authMiddleware, (req, res) => {
  res.send(req.user);
});

mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(5000, () => {console.log("Server started on port 5000.")});
