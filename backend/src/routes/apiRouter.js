import express from "express";
import userRouter from "./userRouter.js";
import documentRouter from "./documentRouter.js";
const router = express.Router();

router.use("/users", userRouter);
router.use("/documents", documentRouter);

export default router;
