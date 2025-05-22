import Document from "../schema/document.js";
import crudRepository from "./crudRepository.js";

const documentRepository = {
  ...crudRepository(Document),
  getByOwnerOrCollaborator: async function (userId) {
    const documents = await Document.find({
      $or: [
        { owner: userId },
        { collaborators: { $elemMatch: { user: userId } } },
      ],
    })
      .populate("owner", "username email")
      .populate("collaborators.user", "username email");
    return documents;
  },
};

export default documentRepository;
