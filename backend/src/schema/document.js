import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: Object, default: {} }, // Tiptap stores JSON content
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    collaborators: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        role: { type: String, enum: ["editor", "viewer"], default: "viewer" },
      },
    ],
  },
  { timestamps: true }
);

const Document = mongoose.model("Document", documentSchema);

export default Document;
