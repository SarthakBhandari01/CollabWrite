import axios from "../../config/axiosConfig";

export const createDocument = async (description, title, token) => {
  try {
    const response = await axios.post(
      "/documents",
      {
        title: title || "Untitled Document",
        description: description || "No description provided",
      },
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    console.log("Document created successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating document:", error);
    throw error;
  }
};
