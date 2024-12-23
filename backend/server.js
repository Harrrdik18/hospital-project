const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

const patientRoutes = require("./routes/patientRoutes");
const bedRoutes = require("./routes/bedRoutes");

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/patients", patientRoutes);
app.use("/api/beds", bedRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));