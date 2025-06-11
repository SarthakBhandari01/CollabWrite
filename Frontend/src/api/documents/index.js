import axios from "../../config/axiosConfig";

export const createDocumentRequest = async (content, title, token) => {
  try {
    console.log("Creating document with content:", content, "and title:", title);
    console.log("Using token:", token);
    const response = await axios.post(
      "/documents/",
      {
        title: title || "Untitled Document",
        content: content || "",
      },
      {
        headers: {
          "x-access-header": token,
        },
      }
    );
    console.log("Document created successfully:", response.data);
    return response.data.data;
  } catch (error) {
    console.error("Error creating document:", error);
    throw error;
  }
};
