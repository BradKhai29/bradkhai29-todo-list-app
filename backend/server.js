import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import authRoute from "./controllers.routes/authController.route.js";
import bodyParser from "body-parser";

// App constants.
dotenv.config();
const port = process.env.PORT || 8080;
const mongoDBConnectionString = process.env.MONGO_DB;

mongoose.connect(mongoDBConnectionString, {
	dbName: "todo-list-app"
}).then(() => {
	console.log("Connect to mongodb success.");
});

console.log(mongoDBConnectionString);

const app = express();

// Configure middlewares for server app.
app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoute);

app.get("/api/contacts", (req, res) => {
	const response = {
		message: "Get all contacts"
	};
	res.status(200).json(response);
});

// Start server.
app.listen(port, () => {
	console.log(`Server is running on the port: ${port}`);
});
