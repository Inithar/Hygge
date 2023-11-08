import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

import { addUserToNewsletter } from "../../services/emailsApi";

export const useAddUserToNewsletter = () => {
  const { mutate, isLoading, error } = useMutation({
    mutationFn: addUserToNewsletter,
    onSuccess: () => {
      toast.success("You have successfully subscribed to the newsletter");
    },
    onError: (error: Error) => toast.error(error.message),
  });

  return { addUserToNewsletter: mutate, isLoading, error };
};
