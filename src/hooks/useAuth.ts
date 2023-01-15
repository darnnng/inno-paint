import { useAppSelector } from './redux-hooks';

export function useAuth() {
  const user = useAppSelector((state) => state.user);
  return {
    isAuth: !!user.id,
    ...user,
  };
}
