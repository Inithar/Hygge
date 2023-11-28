import { supabase } from "../lib/supabase";

import { FormValues as SignupFormValues } from "../screens/Register/Register";

export type Credentials = {
  email: string;
  password: string;
};

export const signup = async ({ name, surname, phone, email, password }: SignupFormValues) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
        surname,
        phone,
      },
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const login = async ({ email, password }: Credentials) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
}

export const sendRecoverPasswordEmail = async (email: string) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
