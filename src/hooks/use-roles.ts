import { useClerk, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

type UserRole = 'ADMIN' | 'MENTOR' | 'CREATOR' | 'STUDENT';

interface UseRoleProps {
  allowedRoles?: UserRole[];
  redirectTo?: string;
}

export function useRole({ allowedRoles, redirectTo = "/" }: UseRoleProps = {}) {
  const { user } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();

  const role = user?.publicMetadata?.role as UserRole;
  const isAuthorized = !allowedRoles || allowedRoles.includes(role);

  const checkAccess = () => {
    if (!isAuthorized) {
      signOut(() => router.push(redirectTo));
      return false;
    }
    return true;
  };

  return {
    role,
    isAuthorized,
    checkAccess,
    user
  };
}