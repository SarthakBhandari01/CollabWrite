/* eslint-disable no-undef */
import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const db_url = process.env.db_url;
export const JWT_SECRET = process.env.JWT_SECRET;
