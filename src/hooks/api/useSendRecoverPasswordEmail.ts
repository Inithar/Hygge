import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

import { sendRecoverPasswordEmail } from "../../services/authApi";

export const useSendRecoverPasswordEmail = () => {
  const { mutate, isLoading } = useMutation({
    mutationFn: sendRecoverPasswordEmail,
    onSuccess: () => toast.success("Email successfully send"),
    onError: (error: Error) => toast.error(error.message),
  });

  return { sendRecoverPasswordEmail: mutate, isSending: isLoading };
};
