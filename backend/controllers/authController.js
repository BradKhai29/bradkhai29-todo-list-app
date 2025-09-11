import e from "express";
import { UserSchema } from "../models/user.js";

/**
 * Login the target user based on the provided credentials.
 *
 * @param {e.Request} request Incoming request
 * @param {e.Response} response
 */
async function loginAsync(request, response) {
	try {
		console.log("Run to this point");
		const value = JSON.stringify(request.body);
		console.log(`Request body: ${value}`);

		return response.json("hello world");
	} catch (error) {
		console.error("Error during login:", error);
		response.status(500).json({ error: "Internal server error" });
	}
}

/**
 *
 * @param {e.Request} request Incoming request
 * @param {e.Response} response
 * @returns
 */
async function registerAsync(request, response) {
	try {
		console.log("Run to this point");
		console.log("Request body:", request.body);
		const userData = new UserSchema(request.body);
		const email = userData.email;

		const existingUser = await UserSchema.findOne({ email: email });
		if (existingUser) {
			return response.status(400).json({ error: "Email already in use" });
		}
		await userData.save();

		return response.json("User registered successfully");
	} catch (error) {
		console.error("Error during registration:", error);
		response.status(500).json({ error: "Internal server error" });
	}
}

const authController = {
	loginAsync: loginAsync,
	registerAsync: registerAsync
};

export { authController };
