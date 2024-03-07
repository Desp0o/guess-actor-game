import { useSelector } from 'react-redux';

interface RootState {
    userStore: {
      name: string
      avatar: string
    };
  }

export const useUser = () => {
  const user = useSelector((state: RootState) => state.userStore.name);
  const avatar = useSelector((state: RootState) => state.userStore.avatar);
  return  {user, avatar}
}
