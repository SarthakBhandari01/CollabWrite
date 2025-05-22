import express from "express";
import {
  createDocumentController,
  deleteDocumentController,
  getAllAccessibleDocumentsController,
  getDocumentByIdController,
  updateDocumentController,
} from "../controllers/documentController.js";
import { isAuthenticated } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", isAuthenticated, createDocumentController);
router.get("/", isAuthenticated, getAllAccessibleDocumentsController);
router.get("/:id", isAuthenticated, getDocumentByIdController);
router.put("/:id", isAuthenticated, updateDocumentController);
router.delete("/:id", isAuthenticated, deleteDocumentController);

export default router;
