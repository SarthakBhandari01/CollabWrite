import { StatusCodes } from "http-status-codes";
import {
  createDocumentService,
  deleteDocumentService,
  getAllAccessibleDocumentsService,
  getDocumentByIdService,
  updateDocumentService,
} from "../services/documentService.js";

export const createDocumentController = async (req, res) => {
  try {
    const userId = req.user;
    const { title, content } = req.body;

    // Validate the request body
    if (!title || !userId) {
      return res.status(400).json({
        success: false,
        message: "Title, owner are required",
      });
    }

    // Create the document
    const document = await createDocumentService({
      title: title || "Untitled Document",
      content: content || {},
      owner: userId,
    });

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Document created successfully",
      data: document,
    });
  } catch (error) {
    console.error("Create document controller error ", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getAllAccessibleDocumentsController = async (req, res) => {
  try {
    const userId = req.user;
    const documents = await getAllAccessibleDocumentsService(userId);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Documents fetched successfully",
      data: documents,
    });
  } catch (error) {
    console.error("Get all accessible documents controller error ", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getDocumentByIdController = async (req, res) => {
  try {
    const userId = req.user;
    const documentId = req.params.id;

    // Validate the request parameters
    if (!documentId) {
      return res.status(400).json({
        success: false,
        message: "Document ID is required",
      });
    }

    // Get the document by ID
    const document = await getDocumentByIdService(documentId, userId);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Document fetched successfully",
      data: document,
    });
  } catch (error) {
    console.error("Get document by ID controller error ", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const updateDocumentController = async (req, res) => {
  try {
    const userId = req.user;
    const documentId = req.params.id;
    const data = req.body;

    if (!documentId) {
      return res.status(400).json({
        success: false,
        message: "Document ID is required",
      });
    }
    const updatedDoc = await updateDocumentService(documentId, data, userId);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Document updated successfully",
      data: updatedDoc,
    });
  } catch (error) {
    console.error("Update document controller error ", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const deleteDocumentController = async (req, res) => {
  try {
    const userId = req.user;
    const documentId = req.params.id;

    if (!documentId) {
      return res.status(400).json({
        success: false,
        message: "Document ID is required",
      });
    }

    const deletedDoc = await deleteDocumentService(documentId, userId);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Document deleted successfully",
      data: deletedDoc,
    });
  } catch (error) {
    console.error("Delete document controller error ", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Internal server error",
    });
  }
};
