import { signInRequest } from "@/api/auth";
import { useAuth } from "@/hooks/context/useAuth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useSignin = () => {
  const { setAuth } = useAuth();
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: signinMutation,
  } = useMutation({
    mutationFn: signInRequest,
    onSuccess: (response) => {
      console.log("Successfully signed in", response);

      const userObject = JSON.stringify(response.data);

      localStorage.setItem("user", userObject);
      localStorage.setItem("token", response.data.token);

      setAuth({
        user: response.data,
        token: response.data.token,
        isLoading: false,
      });

      toast.success(
        "Successfully signed in. You will be redirected to the home page in a few seconds."
      );
    },
    onError: (error) => {
      console.error(error.message);
      toast.error(`Failed to sign in: ${error.message}`);
    },
  });
  return {
    isSuccess,
    isPending,
    error,
    signinMutation,
  };
};
