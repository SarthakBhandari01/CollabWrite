import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: function (emailvalue) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
          return emailRegex.test(emailvalue);
        },
        message: "Invalid Email Formate",
      },
    },
    password: { type: String, required: true, minlength: 4 },
  },
  { timestamps: true }
);

userSchema.pre("save", function saveUser(next) {
  const user = this;
  const saltRounds = 5;
  const SALT = bcrypt.genSaltSync(saltRounds);
  const hashPassword = bcrypt.hashSync(user.password, SALT);
  user.password = hashPassword;
  // user.avatar = `https://robohash.org/${user.name}`;
  next();
});
const User = mongoose.model("User", userSchema);

export default User;
