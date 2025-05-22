import { StatusCodes } from "http-status-codes";
import documentRepository from "../repositories/documentRepository.js";

const isOwner = (document, userId) => {
  if (document.owner.toString() === userId.toString()) {
    return true;
  }
  return false;
};

const isEditor = (document, userId) => {
  return document.collaborators.some(
    (collaborator) =>
      collaborator.user.toString() === userId.toString() &&
      collaborator.role === "editor"
  );
};
const isCollaborator = (document, userId) => {
  if (
    document.collaborators.some(
      (collaborator) => collaborator.user.toString() === userId.toString()
    )
  ) {
    return true;
  }
  return false;
};

export const createDocumentService = async (data) => {
  try {
    const document = await documentRepository.create(data);
    return document;
  } catch (error) {
    console.error("Create document service error ", error);
    throw error;
  }
};

export const getAllAccessibleDocumentsService = async (userId) => {
  try {
    const documents = await documentRepository.getByOwnerOrCollaborator(userId);
    return documents;
  } catch (error) {
    console.error("Get all accessible documents service error ", error);
    throw error;
  }
};

export const getDocumentByIdService = async (documentId, userId) => {
  try {
    const document = await documentRepository.getById(documentId);
    if (!document) {
      throw {
        status: StatusCodes.NOT_FOUND,
        message: "Document not found",
      };
    }
    if (!isOwner(document, userId) && !isCollaborator(document, userId)) {
      throw {
        status: StatusCodes.FORBIDDEN,
        message: "You are not authorized to access this document",
      };
    }
    return document;
  } catch (error) {
    console.error("Get document by ID service error ", error);
    throw error;
  }
};

export const updateDocumentService = async (documentId, data, userId) => {
  try {
    const document = await documentRepository.getById(documentId);
    if (!document) {
      throw {
        status: StatusCodes.NOT_FOUND,
        message: "Document not found",
      };
    }
    const hasPermission =
      isOwner(document, userId) || isEditor(document, userId);

    if (!hasPermission) {
      throw {
        status: StatusCodes.FORBIDDEN,
        message: "You are not authorized to update this document",
      };
    }

    const updatedDoc = await documentRepository.update(documentId, data);
    if (!document) {
      throw {
        status: StatusCodes.NOT_FOUND,
        message: "Document not found",
      };
    }

    return updatedDoc;
  } catch (error) {
    console.error("Update document service error ", error);
    throw error;
  }
};

export const deleteDocumentService = async (documentId, userId) => {
  try {
    let document = await documentRepository.getById(documentId);
    if (!document) {
      throw {
        status: StatusCodes.NOT_FOUND,
        message: "Document not found",
      };
    }
    if (!isOwner(document, userId)) {
      throw {
        status: StatusCodes.FORBIDDEN,
        message: "You are not authorized to delete this document",
      };
    }
    document = await documentRepository.delete(documentId);
    return document;
  } catch (error) {
    console.error("Delete document service error ", error);
    throw error;
  }
};
