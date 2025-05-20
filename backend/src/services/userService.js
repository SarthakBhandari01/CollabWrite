import { StatusCodes } from "http-status-codes";
import userRepository from "../repositories/userRepository.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt.js";

export const signUpService = async (user) => {
  try {
    const newUser = await userRepository.create(user);
    return newUser;
  } catch (error) {
    console.log(error);
    if (error.code === 11000 || error.name === "MongoServerError") {
      throw {
        status: StatusCodes.BAD_REQUEST,
        message: "User already exists",
      };
    }
    throw error;
  }
};

export const signInService = async (userDetail) => {
  try {
    const user = await userRepository.getByEmail(userDetail.email);

    if (!user) {
      throw {
        status: StatusCodes.NOT_FOUND,
        message: "User not found",
      };
    }

    const isPasswordValid = bcrypt.compareSync(
      userDetail.password,
      user.password
    );

    if (!isPasswordValid) {
      throw {
        status: StatusCodes.UNAUTHORIZED,
        message: "Invalid password",
      };
    }

    const token = generateToken({
      _id: user._id,
      email: user.email,
    });

    return {
      _id: user._id,
      email: user.email,
      username: user.username,
      token,
    };
  } catch (error) {
    console.error("signInService error:", error);
    throw {
      status: error.status || StatusCodes.INTERNAL_SERVER_ERROR,
      message: error.message || "Internal server error",
    };
  }
};
