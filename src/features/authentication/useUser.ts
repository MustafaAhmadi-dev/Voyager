import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export type User = {
  email: string;
  id: string;
  role: string;
  user_metadata: {
    avatar: string;
    fullName: string;
  };
};
function useUser(): {
  user: User | undefined;
  isLoading: boolean;
  isAuthenticated: boolean;
} {
  const {
    data: user,
    isLoading,
  }: { data: User | undefined; isLoading: boolean } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { user, isLoading, isAuthenticated: user?.role === "authenticated" };
}

export default useUser;
