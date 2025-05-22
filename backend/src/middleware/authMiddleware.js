import { StatusCodes } from "http-status-codes";
import { verifyToken } from "../utils/jwt.js";

export const isAuthenticated = (req, res, next) => {
  const token = req.headers["x-access-header"];
  if (!token) {
    return res
      .status(StatusCodes.FORBIDDEN)
      .json({ success: false, message: "token is required" });
  }
  try {
    const response = verifyToken(token);
    req.user = response._id;
    next();
  } catch (error) {
    console.log("Auth middleware error", error);
    if (error.name === "TokenExpiredError") {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        success: false,
        message: "Token expired",
      });
    }
    return res.status(StatusCodes.UNAUTHORIZED).json({
      success: false,
      message: "Invalid token",
    });
  }
};
