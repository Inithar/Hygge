import { useMutation } from "@tanstack/react-query";
import { sendContactEmail } from "../../services/emailsApi";
import toast from "react-hot-toast";

export const useSendContactEmail = () => {
  const { mutate, isLoading, error } = useMutation({
    mutationFn: sendContactEmail,
    onSuccess: () => {
      toast.success("Your email has been send successfully");
    },
    onError: (error: Error) => toast.error(error.message),
  });

  return { sendContactEmail: mutate, isSending: isLoading, error };
};
