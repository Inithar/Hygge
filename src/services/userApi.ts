import { supabase } from "../lib/supabase";

type FieldsToUpdate = {
  name?: string;
  surname?: string;
  password?: string;
  phone?: string;
};

type UpdateCurrentUserData = {
  fieldsToUpdate: FieldsToUpdate;
  currentPassword?: string;
};

export const getCurrentUser = async () => {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) {
    return null;
  }

  const { data, error } = await supabase.auth.getUser();

  if (error) {
    throw new Error(error.message);
  }

  return data?.user;
};

export const updateCurrentUser = async ({ fieldsToUpdate, currentPassword }: UpdateCurrentUserData) => {
  if (currentPassword) {
    const { data: isPasswordCorrect, error } = await supabase.rpc("verify_user_password", {
      password: currentPassword,
    });

    if (error) {
      throw new Error(error.message);
    }

    if (!isPasswordCorrect) {
      throw new Error("Current password is incorrect");
    }
  }

  const { name, surname, password, phone } = fieldsToUpdate;

  let updateData;

  if (password) updateData = { password };
  if (name || surname || phone) updateData = { data: { name, surname, phone } };

  if (!updateData) {
    throw new Error("Something went wrong");
  }

  const { data: updatedUser, error } = await supabase.auth.updateUser(updateData);

  if (error) {
    throw new Error(error.message);
  }

  return updatedUser;
};
