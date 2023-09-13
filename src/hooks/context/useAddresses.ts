import { useContext } from "react";
import { AddressesContext } from "../../screens/Account/Addresses/Addresses";

export const useAddresses = () => {
  const context = useContext(AddressesContext);

  if (context === undefined) {
    throw new Error("AddressesContext was used outside of the AddressesProvider");
  }

  return context;
};
