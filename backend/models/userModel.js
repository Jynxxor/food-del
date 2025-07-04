import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true, lowercase: true},
password: {type: String, required: true},
cartData: {type: Object, default: {}}
},{minimize: false}) //!if minimize not given, cartData will not be created

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;