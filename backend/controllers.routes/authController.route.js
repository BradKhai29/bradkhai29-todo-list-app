import express from "express";
import { authController } from "../controllers/authController.js";

const route = express.Router();

route.post("/login", authController.loginAsync);
route.post("/register", authController.registerAsync);

export default route;
