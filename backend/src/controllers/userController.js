import { StatusCodes } from "http-status-codes";
import { signInService, signUpService } from "../services/userService.js";

export async function signUpController(req, res) {
  try {
    const { email, username, password } = req.body;
    const newUser = await signUpService({
      email,
      username,
      password,
    });
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    console.log("user signup controller error", error);
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Internal server error",
    });
  }
}

export async function signInController(req, res) {
  try {
    const response = await signInService(req.body);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "User signed in successfully",
      data: response,
    });
  } catch (error) {
    console.log("user signin controller error", error);
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Internal server error",
    });
  }
}
