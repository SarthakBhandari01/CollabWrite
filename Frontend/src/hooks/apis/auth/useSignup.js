import { signUpRequest } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useSignup = () => {
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: signupMutation,
  } = useMutation({
    mutationFn: signUpRequest,
    onError: (error) => {
      console.log("Failed to signup ", error);
      toast.error("Failed to signup");
    },
    onSuccess: (data) => {
      console.log("successfully signed up ", data);
      toast.success(
        "Successfully signed up. You will be redirected to the login page in a few seconds."
      );
    },
  });
  return { isPending, isSuccess, error, signupMutation };
};
