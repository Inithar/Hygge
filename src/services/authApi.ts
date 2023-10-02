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
    phone,
    options: {
      data: {
        name,
        surname,
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
