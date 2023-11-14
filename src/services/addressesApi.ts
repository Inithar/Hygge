import { supabase } from "../lib/supabase";
import { Address } from "../types/collection";

type NewAddress = Omit<Address, "id" | "created_at" | "updated_at">;
type UpdateAddressData = { newAddressData: Partial<NewAddress>; id: number };

export const getUserAddresses = async (userId: string) => {
  const { data: addresses, error } = await supabase
    .from("addresses")
    .select("*")
    .eq("user_id", userId)
    .order("updated_at", { ascending: false });

  if (error) {
    throw new Error("Addresses could not be loaded");
  }

  return addresses;
};

export const createAddress = async (address: NewAddress) => {
  const { data: createdAddress, error } = await supabase.from("addresses").insert([address]).select().single();

  if (error) {
    throw new Error("Address could not be created");
  }

  return createdAddress;
};

export const deleteAddress = async (id: number) => {
  const { data, error } = await supabase.from("addresses").delete().eq("id", id);

  if (error) {
    throw new Error("Address could not be deleted");
  }

  return data;
};

export const updateAddress = async ({ newAddressData, id }: UpdateAddressData) => {
  const { data, error } = await supabase.from("addresses").update(newAddressData).eq("id", id).select().single();

  if (error) {
    throw new Error("Address could not be updated");
  }

  return data;
};
