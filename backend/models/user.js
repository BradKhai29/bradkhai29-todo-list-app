import mongoose from "mongoose";

// Define the user schema definition.
const userSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	createdAt: { type: Date, default: Date.now }
});

const UserSchemaName = "Users";
const UserSchema = mongoose.model(UserSchemaName, userSchema);

export { UserSchema, UserSchemaName };
