import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { createContext, useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { PageLoader } from "../../view/components/PageLoader";
import { localStorageKeys } from "../config/localStorageKeys";
import { usersService } from "../services/usersService";

interface AuthContextValue {
  signedIn: boolean;
  signin(accessToken: string): void;
  signout(): void;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const queryClient  = useQueryClient();

  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN)

    return !!storedAccessToken;
  });

  const { isError, isFetching, isSuccess } = useQuery({
    queryKey: ['users', 'me'],
    queryFn: async () => usersService.me(),
    enabled: signedIn,
    staleTime: Infinity,
  });

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);

    setSignedIn(true);
  }, []);

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);

    queryClient.clear();

    setSignedIn(false);
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error('Sua sessão expirou!');
      signout();
    }
  }, [isError, signout]);

  if (isFetching) {
    return <PageLoader />
  }

  return (
    <AuthContext.Provider
      value={{
          signedIn: isSuccess && signedIn,
          signin,
          signout
        }}
      >
      {children}
    </AuthContext.Provider>
  )
}
