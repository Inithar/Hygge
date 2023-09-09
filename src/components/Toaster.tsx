import { Toaster as ReactToaster } from "react-hot-toast";

export const Toaster = () => (
  <ReactToaster
    containerStyle={{ margin: "1.2rem" }}
    toastOptions={{
      success: {
        duration: 3000,
      },
      error: {
        duration: 5000,
      },
      style: {
        fontSize: "1.6rem",
        maxWidth: "50rem",
        padding: "1.6rem 2.4rem",
        gap: "1.2rem",
        color: "#1A202C",
      },
    }}
  />
);
