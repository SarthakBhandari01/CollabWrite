import { createDocumentRequest } from "@/api/documents";
import { useAuth } from "@/hooks/context/useAuth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateDocument = () => {
  const { auth } = useAuth();
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: createDocumentMutation,
  } = useMutation({
    mutationFn: ({ content, title }) =>
      createDocumentRequest(content, title, auth.token),
    onError: (error) => {
      console.error("Failed to create document", error);
      toast.error("Failed to create document");
    },
    onSuccess: (data) => {
      console.log("Successfully created document", data);
      toast.success("Document created successfully");
    },
  });
  return { isPending, isSuccess, error, createDocumentMutation };
};
